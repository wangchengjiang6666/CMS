import React, { Component, Fragment } from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Icon,
  Table,
  Divider,
  Tag,
  Pagination,
  Tabs,
  Select,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import FormItem from 'antd/lib/form/FormItem';
import styles from './treammes.less';
import DataRange from '../common/startTime.js';
const { TabPane } = Tabs;
const { Option } = Select;
@Form.create()
class Treammes extends Component {
  columns3 = [
    {
      title: '订单编号',
      dataIndex: 'username',
    },

    {
      title: '产品编号',
      dataIndex: 'type',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '已释放分红',
      dataIndex: 'had',
    },
    {
      title: '年化',
      dataIndex: 'years',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '购买时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];

  data3 = [
    {
      key: '1',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '2',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '3',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '4',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '5',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '6',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
  ];
  columns4 = [
    {
      title: '订单编号',
      dataIndex: 'username',
    },

    {
      title: '产品编号',
      dataIndex: 'type',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '已释放分红',
      dataIndex: 'had',
    },
    {
      title: '年化',
      dataIndex: 'years',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '购买时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];

  data4 = [
    {
      key: '1',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '2',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '3',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '4',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '5',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
    {
      key: '6',
      username: '12345688',
      time: 132132154155,
      type: '4565555fdfd',
      money: '￥300,000.00',
      years: '555555',
      status: '正常',
      had: 75464,
    },
  ];
  state = {
    value: '0',
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
  };
  handleSelectChange = value => {
    /*  console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    }); */
    this.setState({
      value: value,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderWrapper>
        <div>
          <Form onSubmit={this.handleSearch} className={styles.myform}>
            <Row>
              <FormItem label="用户ID">
                {getFieldDecorator('userID')(<Input placeholder="输入用户ID" />)}
              </FormItem>
              <FormItem label="订单时间">
                <DataRange start="订单时间" />
              </FormItem>
              <FormItem label="订单状态">
                <Select onChange={this.handleSelectChange} value={this.state.value}>
                  <Option value="0">理财中</Option>
                  <Option value="1">已完成</Option>
                  <Option value="2">违约赎回</Option>
                </Select>
              </FormItem>
              <FormItem className={styles.btn}>
                <Button type="primary" onClick={this.handleReset}>
                  重置
                </Button>
              </FormItem>
              <FormItem>
                <Button type="primary" onClick={this.handleSearch}>
                  查询
                </Button>
              </FormItem>
            </Row>
          </Form>
        </div>

        <div className={styles.cashmes}>
          <h3>订单列表</h3>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  活期
                </span>
              }
              key="1"
            >
              <Table columns={this.columns3} dataSource={this.data3} bordered />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  定期
                </span>
              }
              key="2"
            >
              <Table columns={this.columns4} dataSource={this.data4} bordered />
            </TabPane>
          </Tabs>
        </div>
      </PageHeaderWrapper>
    );
  }
}
export default Treammes;
