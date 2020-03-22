import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import { formatMessage } from 'umi-plugin-react/locale';
import Authorized from '@/utils/Authorized';
import { menu } from '../defaultSettings';

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
  ["1_1_1", "2_1_1", "1_1_3", "1_1_2", "2_1_2"]
] */
const mess = ['2', '2_1', '2_1-1', '2_1-2', '2_1-3', '2_1-4', '3_1-1'];
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
  /*  let arr = [];
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
  console.log(allroutes); */
  let arr = [];
  let arr1 = []; //一级菜单
  let arr2 = []; //二级菜单
  let arr3 = []; //操作权限
  mess.forEach(e => {
    if (e.length === 5) {
      arr1.includes(e.split('_')[0]) ? '' : arr1.push(e.split('_')[0]);
      arr2.includes(e.split('-')[0]) ? '' : arr2.push(e.split('-')[0]);
      arr3.push(e);
    }
  });
  allroutes.forEach((item, index) => {
    if (arr1.includes(item.key) || item.key == '0') {
      arr.push(item);
    }
  });
  arr.forEach((v, index) => {
    let arr4 = [];
    if (v.routes) {
      v.routes.forEach((i, j) => {
        if (arr2.includes(i.key)) {
          arr4.push(i);
        }
      });
      v.routes = arr4;
    }
  });
  console.log(arr1, arr2, arr3, arr);
  allroutes = arr;
  console.log(allroutes);
  return {
    alloures: allroutes,
    stairMenu: arr1,
    secondMenu: arr2,
    actionPre: arr3,
  };
};

//fileroute(mess);
//------------------------------------------------------------------
const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);

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
      /*  const { authority, path, btnList } = payload;
      const routes = allroutes; */
      // console.log(routes);
      //console.log(allroutes);
      //const filterRoutes = fileroute(btnList);
      //console.log(routes);
      const originalMenuData = memoizeOneFormatter(routes, authority, path);
      const menuData = filterMenuData(originalMenuData);
      const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(originalMenuData);
      yield put({
        type: 'save',
        payload: { menuData, breadcrumbNameMap, routerData: routes },
        /*  payload: {
          menuData: originalMenuData,
          breadcrumbNameMap,
          routerData: routes,
          filterRoutes,
        }, */
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
