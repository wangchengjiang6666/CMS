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
  DatePicker,
  message,
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import styles from './accountmes.less';
const { RangePicker } = DatePicker;
@Form.create()
class Accountmes extends Component {
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
      title: '风控',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '其它',
      dataIndex: 'node',
      key: 'node',
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
          <a onClick={() => this.isLock(true, record)}>锁定</a>
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
      status: 'aaa',
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
      status: 'aaa',
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
      status: 'aaa',
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
      status: 'aaa',
    },
  ];
  toShowDetail = id => {
    this.props.history.push('/UsersPage/Search/inputs', { id });
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
  //查看详情
  handleMoify(record) {
    this.toShowDetail(record);
    console.log('详情');
  }
  //删除
  isLock(id) {
    message.destroy();
    message.success('已锁定');
  }
  changeTime(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  okTime(value) {
    console.log('onOk: ', value);
  }
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
              <FormItem label="注册时间">
                {getFieldDecorator('time')(
                  <RangePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder={['开始时间', '结束时间']}
                    onChange={this.changeTime}
                    onOk={this.okTime}
                    style={{ width: '220px', textAlign: 'left', fontSize: '10px' }}
                  ></RangePicker>
                )}
              </FormItem>
              <FormItem label="用户等级">
                {getFieldDecorator('adress')(<Input placeholder="输入邮箱" />)}
              </FormItem>
              <FormItem label="状态">
                {getFieldDecorator('status')(<Input placeholder="输入邮箱" />)}
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
export default Accountmes;
