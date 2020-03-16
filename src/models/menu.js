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
const allroutes = [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      {
        key: '0',
        path: '/',
        redirect: '/dashboard',
        authority: ['admin', 'user'],
        component: './Dashboard/Analysis.js',
      },
      {
        key: '0',
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        component: './Dashboard/Analysis',
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
            component: './UsersPage/Search/accountmes.js',
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
            component: './AccountPage/investor.js',
          },
          {
            key: '2_2',
            path: '/accountPage/bonus',
            name: 'bonus',
            component: './AccountPage/bonus.js',
          },
          {
            key: '2_3',
            path: '/accountPage/hedge',
            name: 'hedge',
            component: './AccountPage/hedge.js',
          },
          {
            key: '2_4',
            path: '/accountPage/token',
            name: 'token',
            component: './AccountPage/token.js',
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
            component: './TreamPage/treammes.js',
          },
          {
            key: '3_2',
            path: '/treamPage/treamhe',
            name: 'treamhe',
            component: './TreamPage/treamhe.js',
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
            component: './PledgePage/pledgetable.js',
          },
          { path: '/pledgePage/pledgehe', name: 'pledgehe', component: './PledgePage/pledgehe.js' },
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
            component: './PesonalPage/media.js',
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
            component: './DataPage/recharge.js',
          },
          {
            key: '6_2',
            path: '/dataPage/withdraw',
            name: 'withdraw',
            component: './DataPage/withdraw.js',
          },
          {
            key: '6_3',
            path: '/dataPage/setmeal',
            name: 'setmeal',
            component: './DataPage/setmeal.js',
          },
          { key: 64, path: '/dataPage/job', name: 'job', component: './DataPage/job.js' },
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
            component: './System/diction.js',
          },
          {
            key: '7_2',
            path: '/system/lessee',
            name: 'lessee',
            component: './System/lessee.js',
          },

          {
            key: '7_3',
            path: '/system/backusers',
            name: 'backusers',
            icon: 'form',
            component: './System/backusers.js',
          },
        ],
      },
      {
        key: '0',
        path: '/UsersPage/Search/detail',
        component: './UsersPage/Search/detail.js',
      },
      {
        key: '0',
        component: '404',
      },
    ],
  },
];
const fileroute = mess => {
  let arr1 = [
    // user
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', name: 'login', component: './User/Login' },
        { path: '/user/register', name: 'register', component: './User/Register' },
        {
          path: '/user/register-result',
          name: 'register.result',
          component: './User/RegisterResult',
        },
        {
          component: '404',
        },
      ],
    },
    // app
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      routes: [
        // dashboard
        {
          path: '/',
          redirect: '/dashboard',
          authority: ['admin', 'user'],
          component: './Dashboard/Analysis.js',
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          component: './Dashboard/Analysis',
        },
      ],
    },
  ];
  console.log(allroutes);
  let arr2 = allroutes[1].routes;
  let arr3 = [];
  console.log(arr2);
  let newmess = mess.map(e => e.key);
  console.log(newmess);
  arr2.forEach((item, index) => {
    /*  mess.forEach((i,j)=>{
      if(item.key)
    }) */
    if (newmess.includes(item.key) || item.key == '0') {
      // arr2.splice(index, 1);
      arr3.push(item);
    }
  });

  arr3.forEach((v, index) => {
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
  /*  arr2.forEach(item => {
    if (item.routes) {
      item.routes.forEach(val => {
        arr3.push(val);
      });
    } else {
      arr3.push(item);
    }
  }); */
  /* arr2.forEach((item, index) => {
    mess.forEach(j => {
      if (item.key !== j.key && item.key !== 0) {
        console.log(arr2[index]);
        arr2.splice(index, 1);
      }
    });
  }); */
  /*  mess = mess.map(e => e.key);
  let arr4 = [];
  console.log(mess);
  arr2.filter((item, index) => {
     if (!(!mess.includes(item.key) && item.key !== 0)) {
      return item;

    }
    return !mess.includes(item.key) && item.key !== 0;
  }); */
  console.log(arr2);
  console.log(arr3);
  allroutes[1].routes = arr3;
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
      //const { routes, authority, path } = payload;
      const { authority, path } = payload;
      const routes = allroutes;
      console.log(routes);
      const originalMenuData = memoizeOneFormatter(routes, authority, path);
      // const menuData = filterMenuData(originalMenuData);
      const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(originalMenuData);
      yield put({
        type: 'save',
        // payload: { menuData, breadcrumbNameMap, routerData: routes },
        payload: { menuData: originalMenuData, breadcrumbNameMap, routerData: routes },
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
