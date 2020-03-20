import React, { Component, Fragment } from 'react';
import { Table, Badge, Tabs, Icon, Modal } from 'antd';
import moment from 'moment';
import styles from './inputs.less';
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['排队中', '释放完成', '释放中'];
const { TabPane } = Tabs;
class Inputs extends Component {
  columns1 = [
    {
      title: '账户类型',
      dataIndex: 'name',
    },
    {
      title: '金额',

      dataIndex: 'money',
    },

    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.showModel1(record)}>查询流水</a>
        </Fragment>
      ),
    },
  ];

  data1 = [
    {
      key: '1',
      name: '可用余额',
      money: '￥3000',
    },
    {
      key: '2',
      name: '消费基金余额',
      money: '￥3000',
    },
    {
      key: '3',
      name: '理财金额',
      money: '￥3000',
    },
  ];
  columns2 = [
    {
      title: '订单编号',
      dataIndex: 'production',
    },
    {
      title: '时间',
      dataIndex: 'xtime',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '金额',
      dataIndex: 'alipay',
    },
    {
      title: '年化收益',
      dataIndex: 'dpay',
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
          <a onClick={() => this.showModel2(record)}>分红流水</a>
        </Fragment>
      ),
    },
  ];

  data2 = [
    {
      key: '1',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 645646464565,
      status: 0,
    },
    {
      key: '2',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 456456565655,
      status: 2,
    },
    {
      key: '3',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 456565656565,
      status: 1,
    },
    {
      key: '4',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 56865656565,
      status: 0,
    },
    {
      key: '5',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 87978656546,
      status: 1,
    },
    {
      key: '6',
      production: '123456asd',
      alipay: '￥300,000.00',
      dpay: '￥300,000.00',
      xtime: 8986546546,
      status: 2,
    },
  ];
  columns3 = [
    {
      title: '用户',
      dataIndex: 'username',
    },

    {
      title: '币种',
      dataIndex: 'type',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];

  data3 = [
    {
      key: '1',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '2',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '3',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '4',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '5',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '6',
      username: '张三',
      time: 132132154155,
      txid: '￥300,000.00',
      type: 'MOF',
      money: '￥300,000.00',
    },
  ];
  columns4 = [
    {
      title: '用户',
      dataIndex: 'username',
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
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];

  data4 = [
    {
      key: '1',
      username: '李四',
      time: 132132154155,
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '2',
      time: 132132154155,
      username: '李四',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '3',
      time: 132132154155,
      username: '李四',
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '4',
      username: '李四',
      time: 132132154155,
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '5',
      username: '李四',
      time: 132132154155,
      type: 'MOF',
      money: '￥300,000.00',
    },
    {
      key: '6',
      username: '李四',
      time: 132132154155,
      type: 'MOF',
      money: '￥300,000.00',
    },
  ];
  state = {
    visible1: false,
    visible2: false,
  };
  showModel1 = record => {
    this.setState({
      visible1: true,
    });
  };
  showModel2 = record => {
    this.setState({
      visible2: true,
    });
  };
  handleOk1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };
  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };
  handleCancel1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };
  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
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
                <span>用户ID：</span>
                <span></span>
              </p>
              <p>
                <span>邮箱：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>手机号：</span>
                <span></span>
              </p>
              <p>
                <span>用户等级：</span>
                <span></span>
              </p>
            </li>
            <li>
              <p>
                <span>是否黑名单：</span>
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
            size="small"
          />
        </div>
        <div className={styles.setmes}>
          <Table
            columns={this.columns2}
            dataSource={this.data2}
            bordered
            title={() => '订单信息'}
            size="small"
          />
        </div>
        <div className={styles.cashmes}>
          <h3>充值提现记录</h3>
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
              <Table
                columns={this.columns3}
                dataSource={this.data3}
                bordered
                pagination={false}
                size="small"
              />
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
              <Table columns={this.columns4} dataSource={this.data4} bordered size="small" />
            </TabPane>
          </Tabs>
        </div>
        <Modal
          title="流水列表"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="分红流水列表"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default Inputs;
