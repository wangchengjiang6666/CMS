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
  Modal,
  message,
  DatePicker,
} from 'antd';
import moment from 'moment';
import FormItem from 'antd/lib/form/FormItem';
import styles from './index.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Btn from '../common/btn.js';
const { RangePicker } = DatePicker;
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
const FormTwo = Form.create({ name: 'form2' })(
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
      const formItemLayout = {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 10 },
        },
      };
      const { getFieldDecorator } = this.props.form;
      return (
        <Modal
          title="添加产品"
          visible={this.props.visible1}
          onOk={this.props.handleOk1}
          onCancel={this.props.handleCancel1}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} className={styles.down}>
              <Form.Item label="产品编号">
                {getFieldDecorator('pronum', {
                  rules: [
                    {
                      required: true,
                      message: '请输入产品编号',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="产品名称">
                {getFieldDecorator('proname', {
                  rules: [
                    {
                      required: true,
                      message: '请输入产品名称',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="最低投资额">
                {getFieldDecorator('min2', {
                  rules: [
                    {
                      required: true,
                      message: '请输入最低投资额',
                    },
                    { validator: this.checkNumber },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="最高投资额">
                {getFieldDecorator('max2', {
                  rules: [
                    {
                      required: true,
                      message: '请输入最高投资额',
                    },
                    { validator: this.checkNumber },
                  ],
                })(<Input />)}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      );
    }
  }
);
const FormTree = Form.create({ name: 'form3' })(
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
      const formItemLayout = {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 10 },
        },
      };
      const { getFieldDecorator } = this.props.form;
      return (
        <Modal
          title="添加产品"
          visible={this.props.visible2}
          onOk={this.props.handleOk2}
          onCancel={this.props.handleCancel2}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} className={styles.down}>
              <Form.Item label="产品编号">
                {getFieldDecorator('pronum2', {
                  initialValue: this.props.layRecord ? this.props.layRecord.username : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入产品编号',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="产品名称">
                {getFieldDecorator('proname2', {
                  initialValue: this.props.layRecord ? this.props.layRecord.type : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入产品名称',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="最低投资额">
                {getFieldDecorator('min3', {
                  initialValue: this.props.layRecord ? this.props.layRecord.money : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入最低投资额',
                    },
                    { validator: this.checkNumber },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="最高投资额">
                {getFieldDecorator('max3', {
                  initialValue: this.props.layRecord ? this.props.layRecord.adress : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入最高投资额',
                    },
                    { validator: this.checkNumber },
                  ],
                })(<Input />)}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      );
    }
  }
);
class MyService extends Component {
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
      title: '直属上级',
      dataIndex: 'six',
      key: 'six',
    },

    {
      title: '金额',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '风控字段1',
      dataIndex: 'num1',
      key: 'num1',
    },
    {
      title: '风控字段2',
      dataIndex: 'num2',
      key: 'num2',
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
              <a>客服审核</a>
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
      num1: 'fdfffffff',
      num2: '4455555',
      six: '张三',
      money: 555555,
      status: '等待审核',
    },
    {
      key: '2',
      username: 'John Brown',
      order: 12132545646,
      num1: 'fdfffffff',
      num2: '4455555',
      six: '张三',
      money: 555555,
      status: '等待审核',
    },
    {
      key: '3',
      username: 'John Brown',
      order: 12132545646,
      num1: 'fdfffffff',
      num2: '4455555',
      six: '张三',
      money: 555555,
      status: '等待审核',
    },
    {
      key: '4',
      username: 'John Brown',
      order: 12132545646,
      num1: 'fdfffffff',
      num2: '4455555',
      six: '张三',
      money: 555555,
      status: '等待审核',
    },
  ];
  showModal1 = () => {
    this.formRef2.props.form.resetFields();
    this.setState({
      visible1: true,
    });
  };

  handleOk1 = e => {
    console.log(e);
    e.preventDefault();
    this.formRef2.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({
      visible1: false,
    });
  };
  delete = record => {
    message.destroy();
    message.success('删除成功');
    console.log(123);
  };
  handleCancel1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };
  showModal2 = record => {
    console.log(record);
    this.formRef3.props.form.resetFields();
    this.setState({
      visible2: true,
      layRecord: record,
    });
  };

  handleOk2 = e => {
    console.log(e);
    e.preventDefault();
    this.formRef3.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
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
  saveFormRef2 = form => {
    this.formRef2 = form;
  };
  saveFormRef3 = form => {
    this.formRef3 = form;
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
              <span style={{ marginRight: '10px' }}>已选：{this.state.num} 条</span>
              <span style={{ marginRight: '20px' }}>总金额：{this.state.totalMoney}</span>
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
export default MyService;
