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
  Modal,
  Checkbox,
  message,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import FormItem from 'antd/lib/form/FormItem';
import styles from './index.less';
import DataRange from '../common/startTime.js';
import Btn from '../common/btn.js';
const { TabPane } = Tabs;
const { Option } = Select;
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
          title="添加银行卡"
          visible={this.props.visible4}
          onOk={this.props.handleOk4}
          onCancel={this.props.handleCancel4}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} className={styles.down}>
              <Form.Item label="银行卡号">
                {getFieldDecorator('pronum', {
                  rules: [
                    {
                      required: true,
                      message: '请输入银行卡号',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="持卡人">
                {getFieldDecorator('proname', {
                  rules: [
                    {
                      required: true,
                      message: '请输入持卡人姓名',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="身份证号码">
                {getFieldDecorator('min2', {
                  rules: [
                    {
                      required: true,
                      message: '请输入身份证号码',
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
class Treammes extends Component {
  columns = [
    {
      title: '订单号',
      dataIndex: 'order',
    },

    {
      title: '用户',
      dataIndex: 'username',
    },
    {
      title: '金额',
      dataIndex: 'money',
    },
    {
      title: '银行',
      dataIndex: 'bank',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '卡号',
      dataIndex: 'card',
    },
    {
      title: '流水号',
      dataIndex: 'freeCard',
    },
    {
      title: '凭证',
      dataIndex: 'pic',
      render: val => {
        return <img src={val} style={{ width: '100px' }} />;
      },
    },

    {
      title: '提交时间',
      dataIndex: 'time',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: val => {
        if (val === '0') {
          return <span>等待分卡</span>;
        } else {
          return <span>等待核账</span>;
        }
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        if (record.status === '0') {
          return (
            <div className="action">
              <Fragment>
                <a onClick={this.showModal1.bind(this, record)}>选择卡号</a>
              </Fragment>
            </div>
          );
        } else {
          return (
            <div className="action">
              <Fragment>
                <a onClick={this.confirm}>确认</a>
              </Fragment>
            </div>
          );
        }
      },
    },
  ];

  data = [
    {
      key: '1',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '0',
    },
    {
      key: '2',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '1',
    },
    {
      key: '3',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '1',
    },
    {
      key: '4',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '0',
    },
    {
      key: '5',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '0',
    },
    {
      key: '6',
      order: '12345688',
      username: '张三',
      bank: '浦发银行',
      name: '王五',
      card: '445654536',
      freeCard: '4565988888',
      time: 132132154155,
      pic:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584785249605&di=d6621214727061ede5e9a2b8f11a8036&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg',
      money: '￥300000.00',
      status: '1',
    },
  ];
  columns1 = [
    {
      title: '持卡人',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '银行',
      dataIndex: 'bank',
      key: 'bank',
    },
    {
      title: '银行卡号',
      dataIndex: 'card',
      key: 'card',
    },

    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) => {
        return (
          <Select
            onChange={this.getRecord.bind(this, record)}
            defaultValue={text}
            style={{ width: '100px' }}
            onSelect={this.changeBank}
          >
            <Option value="0">有效</Option>
            <Option value="1">无效</Option>
          </Select>
        );
      },
    },
  ];

  data1 = [
    {
      key: '1',
      name: '张三',
      bank: '中国银行',
      card: 4564565645654645645656,
      action: '0',
    },
    {
      key: '2',
      name: '张三',
      bank: '民生银行',
      card: 4564565645654645645656,
      action: '0',
    },
    {
      key: '',
      name: '张三',
      bank: '招商银行',
      card: 4564565645654645645656,
      action: '0',
    },
  ];

  state = {
    value: '0',
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    checkedList: [],
  };
  changeBank = value => {
    console.log(value);
    if (value === '1') {
      this.setState({
        visible3: true,
      });
    }
  };
  getRecord = record => {
    console.log(record);
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
  confirm = e => {
    message.destroy();
    message.success('已确认');
  };
  showModal1 = record => {
    this.setState({
      visible1: true,
    });
  };

  handleOk1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };

  handleCancel1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };
  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOk2 = e => {
    console.log(e);
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
  showModal3 = record => {
    this.setState({
      visible3: true,
    });
  };

  handleOk3 = e => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  };

  handleCancel3 = e => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  };
  showModal4 = record => {
    this.formRef2.props.form.resetFields();
    this.setState({
      visible4: true,
    });
  };

  handleOk4 = e => {
    e.preventDefault();
    this.formRef2.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    this.setState({
      visible4: false,
    });
  };

  handleCancel4 = e => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  };
  onChange = checkedValues => {
    console.log('checked = ', checkedValues);
    let nowchecked = checkedValues.filter((item, index) => index === checkedValues.length - 1);
    this.setState({
      checkedList: nowchecked,
    });
  };
  saveFormRef2 = form => {
    this.formRef2 = form;
  };
  handleAdd1 = e => {
    e.preventDefault();
    this.formRef1.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  handleReset1 = () => {
    const { form } = this.formRef1.props;
    form.resetFields();
  };
  render() {
    return (
      <PageHeaderWrapper>
        <div>
          <Form onSubmit={this.handleSearch} className={styles.myform}>
            <Row>
              <FormItem label="用户名">
                <Input placeholder="输入用户名" />
              </FormItem>
              <FormItem label="状态">
                <Select
                  onChange={this.handleSelectChange}
                  value={this.state.value}
                  style={{ width: '185px' }}
                >
                  <Option value="0">全部</Option>
                  <Option value="1">等待分卡</Option>
                  <Option value="2">等待核账</Option>
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
          <div className={styles.cardbank}>
            {' '}
            <Button type="primary" onClick={this.showModal2}>
              银行卡管理
            </Button>
          </div>
          <Table columns={this.columns} dataSource={this.data} bordered />
        </div>
        <Modal
          title="选择你的银行卡"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <Checkbox.Group
            style={{ width: '100%' }}
            onChange={this.onChange}
            value={this.state.checkedList}
          >
            <Row className={styles.myrow}>
              <Col span={24}>
                <Checkbox value="A">
                  <span>455664646454654</span>
                  <span>（今日已收款：555555）</span>
                </Checkbox>
              </Col>
            </Row>
            <Row className={styles.myrow}>
              <Col span={24}>
                <Checkbox value="B">
                  <span>455664646454654</span>
                  <span>（今日已收款：555555）</span>
                </Checkbox>
              </Col>
            </Row>
            <Row className={styles.myrow}>
              <Col span={24}>
                <Checkbox value="C">
                  <span>455664646454654</span>
                  <span>（今日已收款：555555）</span>
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          ,
        </Modal>
        <Modal
          title="银行卡管理"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          width="900px"
        >
          <Table columns={this.columns1} dataSource={this.data1} pagination={false} size="small" />
          <p className={styles.newadd} onClick={this.showModal4}>
            +新添银行卡
          </p>
        </Modal>
        <Modal
          okText="确认"
          visible={this.state.visible3}
          onOk={this.handleOk3}
          onCancel={this.handleCancel3}
        >
          <div className={styles.mytip}>
            <h3>提示</h3>
            <p> 此卡有100个订单正在等待用户打款，确认无效后将会通知用户更新银行卡</p>
          </div>
        </Modal>
        <FormTwo
          visible4={this.state.visible4}
          handleOk4={this.handleOk4}
          handleCancel4={this.handleCancel4}
          wrappedComponentRef={this.saveFormRef2}
        />
      </PageHeaderWrapper>
    );
  }
}
export default Treammes;
