import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Input, Button, Icon, Table, Divider, Tag, Pagination, Tabs } from 'antd';
import moment from 'moment';
import FormItem from 'antd/lib/form/FormItem';
import styles from './index.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
@Form.create()
class Hedge extends Component {
  columns = [
    {
      title: '用户账号',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '币种',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '转账金额',
      dataIndex: 'money',
      key: 'money',
    },

    {
      title: '转自用户',
      dataIndex: 'adress',
      key: 'adress',
    },

    {
      title: '转账时间',
      dataIndex: 'time',
      key: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
  ];
  data = [
    {
      key: '1',
      username: 'John Brown',
      time: 12132545646,
      adress: 'fdfffffff',
      money: '4455555',
      type: 'HC',
    },
    {
      key: '2',
      username: 'John Brown',
      time: 12132545646,
      adress: 'fdfffffff',
      money: '4455555',
      type: 'MOF',
    },
    {
      key: '3',
      username: 'John Brown',
      time: 12132545646,
      adress: 'fdfffffff',
      money: '4455555',
      type: 'MOF',
    },
    {
      key: '4',
      username: 'John Brown',
      time: 12132545646,
      adress: 'fdfffffff',
      money: '4455555',
      type: 'HC',
    },
  ];
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderWrapper>
        <div>
          <Form onSubmit={this.handleSearch} className={styles.myform}>
            <Row>
              <FormItem label="源自用户">
                {getFieldDecorator('userID')(<Input placeholder="输入用户账号" />)}
              </FormItem>
              <FormItem label="转自用户">
                {getFieldDecorator('foruser')(<Input placeholder="转自用户账号" />)}
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
        <div>
          <Table columns={this.columns} dataSource={this.data} />
        </div>
      </PageHeaderWrapper>
    );
  }
}
export default Hedge;
