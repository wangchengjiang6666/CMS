import React, { Component, Fragment } from 'react';
import styles from './detail.less';
import { Table, Badge, Tabs, Icon } from 'antd';
import moment from 'moment';
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['排队中', '释放完成', '释放中'];
const { TabPane } = Tabs;
class Count extends Component {
  columns1 = [
    {
      title: '账户类型',
      dataIndex: 'name',
    },
    {
      title: 'HU',
      className: 'column-money',
      dataIndex: 'HU',
    },
    {
      title: 'MOF',
      dataIndex: 'MOF',
    },
    {
      title: 'HC',
      dataIndex: 'HC',
    },
    {
      title: 'HDAO',
      dataIndex: 'HDAO',
    },
    {
      title: 'EXN',
      dataIndex: 'EXN',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleSearch(true, record)}>查询流水</a>
        </Fragment>
      ),
    },
  ];

  data1 = [
    {
      key: '1',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
    {
      key: '2',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
    {
      key: '3',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
    {
      key: '4',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
    {
      key: '5',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
    {
      key: '6',
      name: '投资账户',
      HU: '￥300,000.00',
      MOF: '￥300,000.00',
      HC: '￥300,000.00',
      HDAO: '￥300,000.00',
      EXN: '￥300,000.00',
    },
  ];

  columns2 = [
    {
      title: '产品',
      dataIndex: 'production',
    },
    {
      title: '订单成本',
      dataIndex: 'cost',
    },
    {
      title: '投资支付',
      dataIndex: 'alipay',
    },
    {
      title: '对冲支付',
      dataIndex: 'dpay',
    },
    {
      title: '奖金支付',
      dataIndex: 'jpay',
    },
    {
      title: '冻结',
      dataIndex: 'freeze',
    },
    {
      title: '剩余冻结',
      dataIndex: 'sfreeze',
    },
    {
      title: '发奖次数',
      dataIndex: 'ftime',
    },
    {
      title: '下单时间',
      dataIndex: 'xtime',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      filters: [
        {
          text: status[0],
          value: 0,
        },
        {
          text: status[1],
          value: 1,
        },
        {
          text: status[2],
          value: 2,
        },
      ],
      render(val) {
        return <Badge status={statusMap[val]} text={status[val]} />;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleRelease(true, record)}>详情释放</a>
        </Fragment>
      ),
    },
  ];

  data2 = [
    {
      key: '1',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 645646464565,
      status: 0,
    },
    {
      key: '2',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 456456565655,
      status: 2,
    },
    {
      key: '3',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 456565656565,
      status: 1,
    },
    {
      key: '4',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 56865656565,
      status: 0,
    },
    {
      key: '5',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 87978656546,
      status: 1,
    },
    {
      key: '6',
      production: '投资账户',
      cost: '￥300,000.00',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      jpay: '￥300,000.00',
      freeze: '￥300,000.00',
      sfreeze: '123',
      sfreeze: '123',
      ftime: '123',
      xtime: 8986546546,
      status: 2,
    },
  ];
  columns3 = [
    {
      title: '时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD')}</span>,
    },
    {
      title: 'Txid',
      dataIndex: 'txid',
    },
    {
      title: '币种',
      dataIndex: 'type',
    },
    {
      title: '余额',
      dataIndex: 'money',
    },
  ];

  data3 = [
    {
      key: '1',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '2',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '3',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '4',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '5',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '6',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
  ];
  columns4 = [
    {
      title: '时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD')}</span>,
    },
    {
      title: 'Txid',
      dataIndex: 'txid',
    },
    {
      title: '币种',
      dataIndex: 'type',
    },
    {
      title: '余额',
      dataIndex: 'money',
    },
  ];

  data4 = [
    {
      key: '1',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '2',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '3',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '4',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '5',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
    {
      key: '6',
      time: 132132154155,
      txid: '￥300,000.00',
      type: '￥300,000.00',
      money: '￥300,000.00',
    },
  ];
  handleSearch = record => {
    console.log(record);
  };
  handleRelease = record => {
    console.log(record);
  };
  render() {
    return (
      <div>
        <div className={styles.title}>用户管理 / 用户查询 / 用户详情</div>
        <div className={styles.usermes}>
          <h3>用户基本信息</h3>
          <ul>
            <li>
              <p>
                <span>用户名：</span>
                <span></span>
              </p>
              <p>
                <span>注册时间：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>注册时间：</span>
                <span></span>
              </p>
              <p>
                <span>邮箱：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>等级：</span>
                <span></span>
              </p>
              <p>
                <span>角色：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>是否节点：</span>
                <span></span>
              </p>
              <p>
                <span>节点名称：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>充值地址：</span>
                <span></span>
              </p>
              <p>
                <span>是否归集：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>归集用户：</span>
                <span></span>
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.accountmes}>
          <Table
            columns={this.columns1}
            dataSource={this.data1}
            bordered
            title={() => '账户信息'}
            pagination={false}
          />
        </div>
        <div className={styles.setmes}>
          <Table
            columns={this.columns2}
            dataSource={this.data2}
            bordered
            title={() => '套餐信息'}
          />
        </div>
        <div className={styles.cashmes}>
          <h3>充值提现</h3>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  充值
                </span>
              }
              key="1"
            >
              <Table columns={this.columns3} dataSource={this.data3} bordered pagination={false} />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  提现
                </span>
              }
              key="2"
            >
              <Table columns={this.columns4} dataSource={this.data4} bordered />
            </TabPane>
          </Tabs>
          ,
        </div>
      </div>
    );
  }
}
export default Count;
