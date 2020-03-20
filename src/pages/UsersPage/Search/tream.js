import React, { Component, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
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
  message,
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import moment from 'moment';
import styles from './tream.less';
@Form.create()
class Tream extends Component {
  columns = [
    {
      title: '用户账号',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) => {
        return <a onClick={() => this.toShowDetail(record.id)}>{text}</a>;
      },
    },
    {
      title: '注册时间',
      dataIndex: 'time',
      key: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '推荐人',
      dataIndex: 'partname',
      key: 'partname',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '等级',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '拉黑时间',
      dataIndex: 'role',
      key: 'role',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleMoify(true, record)}>查看详情</a>
          <Divider type="vertical" />
          <a onClick={() => this.handleDel(true, record)}>移除黑名单</a>
        </Fragment>
      ),
    },
  ];
  data = [
    {
      key: '1',
      username: 'John Brown',
      time: 456789245,
      partname: '张三',
      email: '11111@qq.com',
      role: 7854665999,
      address: '11',

      status: '正常',
    },
    {
      key: '2',
      username: 'John Brown',
      time: 456789245,
      partname: '张三',
      email: '11111@qq.com',
      role: 7854665999,
      address: '11',

      status: '失效',
    },
    {
      key: '3',
      username: 'John Brown',
      time: 456789245,
      partname: '张三',
      email: '11111@qq.com',
      role: 7854665999,
      address: '11',

      status: '正常',
    },
    {
      key: '4',
      username: 'John Brown',
      time: 456789245,
      partname: '张三',
      email: '11111@qq.com',
      role: 7854665999,
      address: '11',

      status: '失效',
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
  toShowDetail = id => {
    this.props.history.push('/UsersPage/Search/inputs', { id });
  };
  //移除黑名单
  handleDel = id => {
    message.destroy();
    message.success('移除成功');
  };
  //查看详情
  handleMoify(record) {
    this.toShowDetail(record);
    console.log('详情');
  }
  state = {
    expand: false,
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
              <FormItem label="用户手机">
                {getFieldDecorator('phone')(<Input placeholder="输入用户手机" />)}
              </FormItem>
              <FormItem label="邮箱">
                {getFieldDecorator('emial')(<Input placeholder="输入邮箱" />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="推荐人">
                {getFieldDecorator('partname')(<Input placeholder="推荐人" />)}
              </FormItem>

              <div className={styles.btn}>
                <p>
                  {' '}
                  <Button type="primary" onClick={this.handleReset}>
                    重置
                  </Button>
                  <Button type="primary" onClick={this.handleSearch}>
                    查询
                  </Button>
                </p>
              </div>
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
export default Tream;
