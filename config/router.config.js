export default [
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
        // routes: [
        //   {
        //     path: '/dashboard/analysis',
        //     name: 'analysis',
        //     component: './Dashboard/Analysis',
        //   },
        //   {
        //     path: '/dashboard/monitor',
        //     name: 'monitor',
        //     component: './Dashboard/Monitor',
        //   },
        //   {
        //     path: '/dashboard/workplace',
        //     name: 'workplace',
        //     component: './Dashboard/Workplace',
        //   },
        // ],
      },
      //用户管理
      {
        name: 'userPage',
        icon: 'highlight',
        path: '/userPage',
        routes: [
          {
            path: '/userPage/search',
            name: 'search',
            icon: 'highlight',
            component: './UsersPage/Search/accountmes.js',
            /*  routes: [
              {
                path: '/userPage/search/usermes',
                name: 'usermes',
                component: './UsersPage/Search/usermes.js',
              },
              {
                path: '/userPage/search/accountmes',
                name: 'accountmes',
                component: './UsersPage/Search/accountmes.js',
              },
              {
                path: '/userPage/search/count',
                name: 'count',
                component: './UsersPage/Search/count.js',
              },
              {
                path: '/userPage/search/inputs',
                name: 'inputs',
                component: './UsersPage/Search/inputs.js',
              },
              {
                path: '/userPage/search/tream',
                name: 'tream',
                component: './UsersPage/Search/tream.js',
              },
              {
                path: '/userPage/search/cash',
                name: 'cash',
                component: './UsersPage/Search/cash.js',
              },
              {
                path: '/userPage/search/mofige',
                name: 'mofige',
                component: './UsersPage/Search/mofige.js',
              },
            ], */
          },

          /*  {
            name: 'role',
            icon: 'highlight',
            path: '/userPage/role',
            routes: [
              {
                name: 'concrol',
                icon: 'highlight',
                component: './UsersPage/Role/concrol.js',
                path: '/userPage/role/concrol',
              },
              {
                name: 'rouleset',
                icon: 'highlight',
                component: './UsersPage/Role/rouleset.js',
                path: '/userPage/role/rouleset',
              },
            ],
          }, */
        ],
      },
      //账户管理
      {
        path: '/accountPage',
        icon: 'form',
        name: 'accountPage',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/accountPage/investor',
            name: 'investor',
            component: './AccountPage/investor.js',
          },
          { path: '/accountPage/bonus', name: 'bonus', component: './AccountPage/bonus.js' },
          { path: '/accountPage/hedge', name: 'hedge', component: './AccountPage/hedge.js' },
          { path: '/accountPage/token', name: 'token', component: './AccountPage/token.js' },
        ],
      },
      //套餐管理
      {
        path: '/treamPage',
        icon: 'form',
        name: 'treamPage',
        routes: [
          {
            path: '/treamPage/treammes',
            name: 'treammes',
            component: './TreamPage/treammes.js',
          },
          { path: '/treamPage/treamhe', name: 'treamhe', component: './TreamPage/treamhe.js' },
        ],
      },
      //质押管理
      {
        path: '/pledgePage',
        icon: 'form',
        name: 'pledgePage',
        routes: [
          {
            path: '/pledgePage/pledgetable',
            name: 'pledgetable',
            component: './PledgePage/pledgetable.js',
          },
          { path: '/pledgePage/pledgehe', name: 'pledgehe', component: './PledgePage/pledgehe.js' },
        ],
      },
      //私塾管理
      {
        path: '/pesonalPage',
        icon: 'form',
        name: 'pesonalPage',
        routes: [
          {
            path: '/pesonalPage/media',
            name: 'media',
            component: './PesonalPage/media.js',
          },
        ],
      },
      //数据统计
      {
        path: '/dataPage',
        icon: 'form',
        name: 'dataPage',
        routes: [
          {
            path: '/dataPage/recharge',
            name: 'recharge',
            component: './DataPage/recharge.js',
          },
          {
            path: '/dataPage/withdraw',
            name: 'withdraw',
            component: './DataPage/withdraw.js',
          },
          {
            path: '/dataPage/setmeal',
            name: 'setmeal',
            component: './DataPage/setmeal.js',
          },
          {
            path: '/dataPage/job',
            name: 'job',
            component: './DataPage/job.js',
          },
        ],
      },
      //系统配置
      {
        path: '/system',
        icon: 'form',
        name: 'system',
        routes: [
          {
            path: '/system/diction',
            name: 'diction',
            component: './System/diction.js',
          },
          {
            path: '/system/lessee',
            name: 'lessee',
            component: './System/lessee.js',
          },

          {
            path: '/system/backusers',
            name: 'backusers',
            component: './System/backusers.js',
          },
          {
            path: '/system/roleset',
            name: 'roleset',
            component: './System/roleset.js',
          },
        ],
      },
      /*  //forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      //  editor
      {
        name: 'editor',
        icon: 'highlight',
        path: '/editor',
        routes: [
          {
            path: '/editor/flow',
            name: 'flow',
            component: './Editor/GGEditor/Flow',
          },
          {
            path: '/editor/mind',
            name: 'mind',
            component: './Editor/GGEditor/Mind',
          },
          {
            path: '/editor/koni',
            name: 'koni',
            component: './Editor/GGEditor/Koni',
          },
        ],
      }, */
      {
        path: '/UsersPage/Search/detail',
        component: './UsersPage/Search/detail.js',
      },
      {
        component: '404',
      },
    ],
  },
];
