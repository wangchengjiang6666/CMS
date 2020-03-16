import React, { Component, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Form, Row, Col, Input, Button, Icon, Table, Divider, Tag, Pagination } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import styles from './accountmes.less';
@Form.create()
class Accountmes extends Component {
  columns = [
    {
      title: '用户名',
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
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '是否节点',
      dataIndex: 'node',
      key: 'node',
    },
    {
      title: '节点名称',
      dataIndex: 'nodename',
      key: 'nodename',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleMoify(true, record)}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => this.handleDel(true, record)}>删除</a>
        </Fragment>
      ),
    },
  ];
  data = [
    {
      key: '1',
      username: 'John Brown',
      time: 32,
      partname: '张三',
      email: '11111@qq.com',
      role: '管理员',
      address: '11',
      node: '是',
      nodename: 'aaa',
    },
    {
      key: '2',
      username: 'John Brown',
      time: 32,
      partname: '张三',
      email: '11111@qq.com',
      role: '管理员',
      address: '11',
      node: '是',
      nodename: 'aaa',
    },
    {
      key: '3',
      username: 'John Brown',
      time: 32,
      partname: '张三',
      email: '11111@qq.com',
      role: '管理员',
      address: '11',
      node: '是',
      nodename: 'aaa',
    },
    {
      key: '4',
      username: 'John Brown',
      time: 32,
      partname: '张三',
      email: '11111@qq.com',
      role: '管理员',
      address: '11',
      node: '是',
      nodename: 'aaa',
    },
  ];
  toShowDetail = id => {
    this.props.history.push('/UsersPage/Search/detail', { id });
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
  state = {
    expand: false,
  };
  reset() {
    console.log(123);
    this.props.form.resetFields();
  }
  //修改
  handleMoify(record) {
    console.log('修改');
  }
  //删除
  handleDel(id) {
    console.log('删除');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderWrapper>
        <div>
          <Form onSubmit={this.handleSearch} className={styles.myform}>
            <Row>
              <FormItem label="用户名">
                {getFieldDecorator('username')(<Input placeholder="输入用户名" />)}
              </FormItem>

              <FormItem label="邮箱">
                {getFieldDecorator('emial')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="用户等级">
                {getFieldDecorator('adress')(<Input placeholder="输入邮箱" />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="用户ID">
                {getFieldDecorator('userID')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="所属节点">
                {getFieldDecorator('node')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="用户角色">
                {getFieldDecorator('role')(<Input placeholder="输入邮箱" />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="推荐人">
                {getFieldDecorator('partname')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="充值地址">
                {getFieldDecorator('adressset')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="是否节点">
                {getFieldDecorator('isnode')(<Input placeholder="输入邮箱" />)}
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
export default Accountmes;
