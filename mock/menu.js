export default {
  /*  'GET /api/menus': [
    { key: 1, mp: '用户管理' },
    { key: 11, mp: '用户查询' },
    { key: 2, mp: '账户管理' },
    { key: 21, mp: '投资账户' },
    { key: 22, mp: '奖金账户' },
  ], */
  'GET /api/menus': [
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
          hideChildrenInMenu: true,
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
  ],
};
