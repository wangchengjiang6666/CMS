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
import styles from './index.less';
const { TabPane } = Tabs;
const { Option } = Select;
@Form.create()
class Recharge extends Component {
  columns3 = [
    {
      title: '用户账号',
      dataIndex: 'username',
    },

    {
      title: '社区分红金额',
      dataIndex: 'type',
    },
    {
      title: '超级分红金额',
      dataIndex: 'money',
    },
    {
      title: '星际分红金额',
      dataIndex: 'had',
    },
  ];

  data3 = [
    {
      key: '1',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '2',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '3',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '4',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '5',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '6',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
  ];
  columns4 = [
    {
      title: '用户账号',
      dataIndex: 'username',
    },

    {
      title: '社区分红金额',
      dataIndex: 'type',
    },
    {
      title: '超级分红金额',
      dataIndex: 'money',
    },
    {
      title: '星际分红金额',
      dataIndex: 'had',
    },
  ];

  data4 = [
    {
      key: '1',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '2',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '3',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '4',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '5',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
    },
    {
      key: '6',
      username: '12345688',
      type: '4565555fdfd',
      money: '￥300000.00',
      had: '￥400000.00',
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
              <FormItem label="用户账号">
                {getFieldDecorator('userID')(<Input placeholder="输入用户账号" />)}
              </FormItem>
              <FormItem label="分红类型">
                <Select onChange={this.handleSelectChange} value={this.state.value}>
                  <Option value="0">静态奖</Option>
                  <Option value="1">推广奖</Option>
                  <Option value="2">团队奖</Option>
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
          <h3>分红列表</h3>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  静态分红
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
                  动态分红
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
export default Recharge;
