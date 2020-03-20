import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Input, Button, Icon, Table, Divider, Tag, Pagination, Tabs } from 'antd';
import moment from 'moment';
import FormItem from 'antd/lib/form/FormItem';
import styles from './index.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
/* const renderContent = (value, row, index) => {
  console.log(value, row, index);
  const obj = {
    children: value,
    props: {},
  };
   if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
}; */

@Form.create()
class Token extends Component {
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
    const temp = {};
    const mergeCells = (text, data, columns) => {
      let i = 0;
      if (text !== temp[columns]) {
        temp[columns] = text;
        data.forEach(item => {
          if (item[columns] === temp[columns]) {
            i += 1;
          }
        });
      }
      return i;
    };
    const columns = [
      {
        title: '用户账号',
        dataIndex: 'username',
        key: 'username',
        render: (text, row) => {
          console.log(text, row);
          const obj = {
            children: text,
            props: {},
          };
          obj.props.rowSpan = mergeCells(row.username, data, 'username');
          return obj;
        },
      },
      {
        title: '账户类型',
        dataIndex: 'type',
        key: 'type',
        rowSpan: 3,
      },
      {
        title: '余额',
        dataIndex: 'money',
        key: 'money',
      },
    ];
    const data = [
      {
        key: '1',
        username: 'John Brown',
        money: '4455555',
        type: '账户余额',
      },
      {
        key: '2',
        username: 'John Brown',
        money: '4455555',
        type: '理财账户余额',
      },
      {
        key: '3',
        username: 'John Brown',
        money: '4455555',
        type: '消费基金余额',
      },
      {
        key: '4',
        username: '张三',
        money: '4455555',
        type: '账户余额',
      },
      {
        key: '5',
        username: '张三',
        money: '55555',
        type: '理财账户余额',
      },
      {
        key: '6',
        username: '张三',
        money: '4455555',
        type: '消费基金余额',
      },
    ];
    return (
      <PageHeaderWrapper>
        <div>
          <Form onSubmit={this.handleSearch} className={styles.myform}>
            <Row>
              <FormItem label="用户账号">
                {getFieldDecorator('userID')(<Input placeholder="输入用户账号" />)}
              </FormItem>
              <FormItem label="钱包余额">
                {getFieldDecorator('time')(<Input placeholder="如：0<可用余额<5000" />)}
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
          <Table columns={columns} dataSource={data} bordered />
        </div>
      </PageHeaderWrapper>
    );
  }
}
export default Token;
