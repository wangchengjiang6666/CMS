import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import { formatMessage } from 'umi-plugin-react/locale';
import Authorized from '@/utils/Authorized';
import { menu } from '../defaultSettings';
import { queryRoutes } from '@/services/user';

const { check } = Authorized;

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  if (!data) {
    return undefined;
  }
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null;
      }

      let locale = 'menu';
      if (parentName && parentName !== '/') {
        locale = `${parentName}.${item.name}`;
      } else {
        locale = `menu.${item.name}`;
      }
      // if enableMenuLocale use item.name,
      // close menu international
      const name = menu.disableLocal
        ? item.name
        : formatMessage({ id: locale, defaultMessage: item.name });
      const result = {
        ...item,
        name,
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

/**
 * get SubMenu or Item
 */
const getSubMenu = item => {
  // doc: add hideChildrenInMenu
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children), // eslint-disable-line
    };
  }
  return item;
};

/**
 * filter menuData
 */
const filterMenuData = menuData => {
  if (!menuData) {
    return [];
  }
  return menuData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => check(item.authority, getSubMenu(item)))
    .filter(item => item);
};
/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 */
const getBreadcrumbNameMap = menuData => {
  if (!menuData) {
    return {};
  }
  const routerMap = {};

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};
//------------------------------------------------------------
//动态获取左边菜单
/* [
  { key: 1, mp: '用户管理' },
  { key: 11, mp: '用户查询' },
  { key: 2, mp: '账户管理' },
  { key: 21, mp: '投资账户' },
  { key: 22, mp: '奖金账户' },
] */
const mess = [
  { key: '1', mp: '用户管理' },
  { key: '1_1', mp: '用户查询' },
  { key: '2', mp: '账户管理' },
  { key: '2_1', mp: '投资账户' },
  { key: '2_2', mp: '奖金账户' },
];
let allroutes = [
  {
    key: '0',
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
  },
  //用户管理
  {
    key: '1',
    name: 'userPage',
    icon: 'highlight',
    path: '/userPage',
    routes: [
      {
        key: '1_1',
        path: '/userPage/search',
        name: 'search',
        icon: 'highlight',
      },

      {
        key: '1_2',
        name: 'role',
        icon: 'highlight',
        path: '/userPage/role',
      },
    ],
  },
  //账户管理
  {
    key: '2',
    path: '/accountPage',
    icon: 'form',
    name: 'accountPage',
    authority: ['admin', 'user'],
    routes: [
      {
        key: '2_1',
        path: '/accountPage/investor',
        name: 'investor',
      },
      {
        key: '2_2',
        path: '/accountPage/bonus',
        name: 'bonus',
      },
      {
        key: '2_3',
        path: '/accountPage/hedge',
        name: 'hedge',
      },
      {
        key: '2_4',
        path: '/accountPage/token',
        name: 'token',
      },
    ],
  },
  //套餐管理
  {
    key: '3',
    path: '/treamPage',
    icon: 'form',
    name: 'treamPage',
    routes: [
      {
        key: '3_1',
        path: '/treamPage/treammes',
        name: 'treammes',
      },
      {
        key: '3_2',
        path: '/treamPage/treamhe',
        name: 'treamhe',
      },
    ],
  },
  //质押管理
  {
    key: '4',
    path: '/pledgePage',
    icon: 'form',
    name: 'pledgePage',
    routes: [
      {
        key: '4_1',
        path: '/pledgePage/pledgetable',
        name: 'pledgetable',
      },
      {
        key: '4_2',
        path: '/pledgePage/pledgehe',
        name: 'pledgehe',
      },
    ],
  },
  //私塾管理
  {
    key: '5',
    path: '/pesonalPage',
    icon: 'form',
    name: 'pesonalPage',
    routes: [
      {
        key: '5_1',
        path: '/pesonalPage/media',
        name: 'media',
      },
    ],
  },
  //数据统计
  {
    key: '6',
    path: '/dataPage',
    icon: 'form',
    name: 'dataPage',
    routes: [
      {
        key: '6_1',
        path: '/dataPage/recharge',
        name: 'recharge',
      },
      {
        key: '6_2',
        path: '/dataPage/withdraw',
        name: 'withdraw',
      },
      {
        key: '6_3',
        path: '/dataPage/setmeal',
        name: 'setmeal',
      },
      { key: 64, path: '/dataPage/job', name: 'job' },
    ],
  },
  //系统配置
  {
    key: '7',
    path: '/system',
    icon: 'form',
    name: 'system',
    routes: [
      {
        key: '7_1',
        path: '/system/diction',
        name: 'diction',
      },
      {
        key: '7_2',
        path: '/system/lessee',
        name: 'lessee',
      },

      {
        key: '7_3',
        path: '/system/backusers',
        name: 'backusers',
        icon: 'form',
      },
      {
        path: '/system/roleset',
        name: 'roleset',
      },
    ],
  },
  {
    key: '0',
    component: '404',
  },
];
const fileroute = mess => {
  let arr = [];
  let newmess = mess.map(e => e.key);
  console.log(newmess);
  allroutes.forEach((item, index) => {
    if (newmess.includes(item.key) || item.key == '0') {
      arr.push(item);
    }
  });
  arr.forEach((v, index) => {
    let arr4 = [];
    if (v.routes) {
      v.routes.forEach((i, j) => {
        if (newmess.includes(i.key)) {
          arr4.push(i);
        }
      });
      v.routes = arr4;
    }
  });
  allroutes = arr;
  console.log(allroutes);
};
fileroute(mess);
//------------------------------------------------------------------
const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);
const newMenus = [
  {
    path: '/form',
    icon: 'form',
    name: '表单页',
    locale: 'menu.form',
    children: [
      {
        path: '/form/basic-form',
        name: '基础表单',
        exact: true,
        locale: 'menu.form.basicform',
      },
      {
        path: '/form/step-form',
        name: '分步表单',
        hideroutesInMenu: true,
        locale: 'menu.form.stepform',
        children: [
          {
            path: '/form/step-form/info',
            name: '分步表单（填写转账信息）',
            exact: true,
            locale: 'menu.form.stepform.info',
          },
          {
            path: '/form/step-form/confirm',
            name: '分步表单（确认转账信息）',
            exact: true,
            locale: 'menu.form.stepform.confirm',
          },
          {
            path: '/form/step-form/result',
            name: '分步表单（完成）',
            exact: true,
            locale: 'menu.form.stepform.result',
          },
        ],
      },
      {
        path: '/form/advanced-form',
        name: '高级表单',
        exact: true,
        locale: 'menu.form.advancedform',
      },
    ],
  },
];
export default {
  namespace: 'menu',

  state: {
    menuData: [],
    routerData: [],
    breadcrumbNameMap: {},
  },

  effects: {
    *getMenuData({ payload }, { put }) {
      const { routes, authority, path } = payload;
      //const { authority, path } = payload;
      //const routes = allroutes;
      // console.log(routes);
      //console.log(allroutes);
      const originalMenuData = memoizeOneFormatter(routes, authority, path);
      const menuData = filterMenuData(originalMenuData);
      const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(originalMenuData);
      yield put({
        type: 'save',
        payload: { menuData, breadcrumbNameMap, routerData: routes },
        //payload: { menuData: originalMenuData, breadcrumbNameMap, routerData: routes },
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
