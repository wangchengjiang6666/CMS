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
} from 'antd';
import moment from 'moment';
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
            <FormItem label="产品编号">
              {getFieldDecorator('userID')(<Input placeholder="输入产品编号" />)}
            </FormItem>
            <FormItem label="产品名称">
              {getFieldDecorator('username')(<Input placeholder="输入产品名称" />)}
            </FormItem>
            <FormItem label="最低投资额">
              {getFieldDecorator('min1', {
                rules: [{ validator: this.checkNumber }],
              })(<Input placeholder="输入投资额" />)}
            </FormItem>
            <FormItem label="最高投资额">
              {getFieldDecorator('max1', {
                rules: [{ validator: this.checkNumber }],
              })(<Input placeholder="输入投资额" />)}
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
class Investor extends Component {
  state = {
    visible1: false,
    visible2: false,
    layRecord: '',
  };
  columns = [
    {
      title: '产品编号',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '产品名称',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '最低投资额',
      dataIndex: 'money',
      key: 'money',
    },

    {
      title: '最高投资额',
      dataIndex: 'adress',
      key: 'adress',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div className="action">
          <Fragment>
            <Btn meths={this.showModal2} record={record} type="1">
              <a>修改</a>
            </Btn>
            <Divider type="vertical" />
            <Btn meths={this.delete} record={record} type="3">
              <a>删除</a>
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
              <Button type="primary" onClick={this.showModal1}>
                <Icon type="plus" />
                新增
              </Button>
            </div>
            <Table columns={this.columns} dataSource={this.data} />
          </div>
          <FormTwo
            visible1={this.state.visible1}
            handleOk1={this.handleOk1}
            handleCancel1={this.handleCancel1}
            wrappedComponentRef={this.saveFormRef2}
          />
          <FormTree
            visible2={this.state.visible2}
            handleOk2={this.handleOk2}
            handleCancel2={this.handleCancel2}
            wrappedComponentRef={this.saveFormRef3}
            layRecord={this.state.layRecord}
          />
        </PageHeaderWrapper>
      </div>
    );
  }
}
export default Investor;
