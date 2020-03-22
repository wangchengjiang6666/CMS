import React, { Component, Fragment } from 'react';
import moment from 'moment';
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
  Modal,
  message,
  DatePicker,
} from 'antd';
const { RangePicker } = DatePicker;
import FormItem from 'antd/lib/form/FormItem';
import styles from './index.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Btn from '../common/btn.js';
const FormOne = Form.create({ name: 'form1' })(
  class extends Component {
    checkNumber = (rule, value, callback) => {
      if (value) {
        let type = Number(value);
        if (type >= 0) {
          callback();
        } else {
          callback('输入数字');
        }
      }
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form className={styles.myform}>
          <Row>
            <FormItem label="手机号">
              {getFieldDecorator('userphone')(<Input placeholder="输入手机号" />)}
            </FormItem>
            <FormItem label="邮箱">
              {getFieldDecorator('useremail')(<Input placeholder="输入邮箱号" />)}
            </FormItem>
            <FormItem label="时间段">
              {getFieldDecorator('time')(
                <RangePicker
                  showTime={{ format: 'HH:mm:ss' }}
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder={['查询时间']}
                  onChange={this.changeTime}
                  onOk={this.okTime}
                  style={{ width: '220px', textAlign: 'left', fontSize: '10px' }}
                ></RangePicker>
              )}
            </FormItem>

            <FormItem className={styles.btn}>
              <Button type="primary" onClick={this.props.handleReset}>
                重置
              </Button>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.props.handleSearch}>
                查询
              </Button>
            </FormItem>
          </Row>
        </Form>
      );
    }
  }
);

class Client extends Component {
  state = {
    visible1: false,
    visible2: false,
    layRecord: '',
    num: 0,
    totalMoney: 0,
    selectedRowKeys: '',
  };
  columns = [
    {
      title: '订单号',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: '用户',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '金额',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '银行',
      dataIndex: 'bank',
      key: 'bank',
    },

    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '卡号',
      dataIndex: 'card',
      key: 'card',
    },
    {
      title: '开户行',
      dataIndex: 'bankType',
      key: 'bankType',
    },
    {
      title: '客服审核通过时间',
      dataIndex: 'passTime',
      key: 'passTime',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div className="action">
          <Fragment>
            <Btn meths={this.uptable} record={record} type="1">
              <a>财务审核</a>
            </Btn>
          </Fragment>
        </div>
      ),
    },
  ];
  data = [
    {
      key: '1',
      username: 'John Brown',
      order: 12132545646,
      bank: '中国银行',
      name: '李四',
      card: '123456789654321',
      bankType: '工商银行',
      passTime: 84563217,
      status: '等待打款',
      money: '4500000',
    },
    {
      key: '2',
      username: 'John Brown',
      order: 12132545646,
      bank: '中国银行',
      name: '李四',
      card: '123456789654321',
      bankType: '工商银行',
      passTime: 84563217,
      status: '等待打款',
      money: '4500000',
    },
    {
      key: '3',
      username: 'John Brown',
      order: 12132545646,
      bank: '中国银行',
      name: '李四',
      card: '123456789654321',
      bankType: '工商银行',
      passTime: 84563217,
      status: '等待打款',
      money: '4500000',
    },
    {
      key: '4',
      username: 'John Brown',
      order: 12132545646,
      bank: '中国银行',
      name: '李四',
      card: '123456789654321',
      bankType: '工商银行',
      passTime: 84563217,
      status: '等待打款',
      money: '4500000',
    },
  ];

  delete = record => {
    message.destroy();
    message.success('删除成功');
    console.log(123);
  };

  handleSearch1 = e => {
    e.preventDefault();
    this.formRef1.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  handleReset1 = () => {
    const { form } = this.formRef1.props;
    form.resetFields();
  };
  saveFormRef1 = form => {
    this.formRef1 = form;
  };

  uptable = record => {
    if (this.state.num > 0) {
      message.destroy();
      message.success('审核成功');
    } else {
      message.destroy();
      message.error('请勾选审核选项');
    }
  };
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      let a = 0;
      let b = 0;
      selectedRows.forEach(item => {
        a++;
        b += item.money;
      });
      this.setState(
        {
          num: a,
          totalMoney: b,
          selectedRowKeys: selectedRowKeys,
        },
        () => {
          console.log(this.state.num, this.state.totalMoney);
        }
      );
    },
  };
  render() {
    /*  const { from } = this.props; */
    /*  const { getFieldDecorator } = this.props.form; */

    return (
      <div>
        <PageHeaderWrapper>
          <div>
            <FormOne
              handleSearch={this.handleSearch1}
              handleReset={this.handleReset1}
              wrappedComponentRef={this.saveFormRef1}
            ></FormOne>
          </div>

          <div>
            <div className={styles.add}>
              <span style={{ marginRight: '20px' }}>已选：{this.state.num} 条</span>

              <Button type="primary" onClick={this.uptable}>
                审核
              </Button>
            </div>
            <Table columns={this.columns} dataSource={this.data} rowSelection={this.rowSelection} />
          </div>
        </PageHeaderWrapper>
      </div>
    );
  }
}
export default Client;
