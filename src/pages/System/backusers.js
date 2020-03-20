import React, { Component, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import StandardTable from '@/components/StandardTable';
import styles from './backusers.less';
import Btn from '../common/btn.js';
import moment from 'moment';
import {
  Modal,
  Button,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  AutoComplete,
  Table,
  Divider,
  message,
} from 'antd';
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
          title="添加用户"
          visible={this.props.visible1}
          onOk={this.props.handleOk1}
          onCancel={this.props.handleCancel1}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} className={styles.down}>
              <Form.Item label="用户名">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="电话号码">
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      required: true,
                      message: '请输入正确的手机号码',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                    },
                    {
                      validator: this.props.validateToNextPassword,
                    },
                  ],
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="确认密码">
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: '请确认密码',
                    },
                    {
                      validator: this.props.compareToFirstPassword,
                    },
                  ],
                })(<Input.Password onBlur={this.props.handleConfirmBlur} />)}
              </Form.Item>
              <Form.Item label="角色">
                {getFieldDecorator('role', {
                  valueProName: 'checked',
                  rules: [
                    {
                      required: true,
                      message: '请选择角色',
                    },
                  ],
                })(
                  <Checkbox.Group style={{ width: '100%' }} onChange={this.props.Changebox1}>
                    <Row className={styles.row}>
                      <Col span={8}>
                        <Checkbox value="A">群主</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">管理员</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">超级管理员</Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="C">超级客户</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="D">普通客户</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">观察者</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
            </Form>
          </div>
        </Modal>
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
          title="修改用户角色"
          visible={this.props.visible2}
          onOk={this.props.handleOk2}
          onCancel={this.props.handleCancel2}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} className={styles.down}>
              <Form.Item label="用户名">
                {getFieldDecorator('username', {
                  initialValue: this.props.layRecord ? this.props.layRecord.name : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="现有角色">
                {getFieldDecorator('nowRole', {
                  initialValue: this.props.layRecord ? this.props.layRecord.menuPre : '',
                  rules: [
                    {
                      required: true,
                      message: '请输入正确的手机号码',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="新角色">
                {getFieldDecorator('nowrole', {
                  valueProName: 'checked',
                  rules: [
                    {
                      required: true,
                      message: '请选择角色',
                    },
                  ],
                })(
                  <Checkbox.Group style={{ width: '100%' }} onChange={this.props.Changebox2}>
                    <Row className={styles.row}>
                      <Col span={8}>
                        <Checkbox value="A">群主</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">管理员</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">超级管理员</Checkbox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="D">超级客户</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">普通客户</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="F">观察者</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      );
    }
  }
);
class Backusers extends Component {
  //用户权限
  // plainOptions = ['查看', '编辑', '添加', '删除'];

  columns = [
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '角色',
      dataIndex: 'menuPre',
    },
    {
      title: '角色菜单权限',
      dataIndex: 'userPre',
    },

    {
      title: '角色按钮权限',
      dataIndex: 'dec',
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
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
        );
      },
    },
  ];
  state = {
    name: '',
    phone: '',
    email: '',
    loading: false,
    confirmDirty: false,
    autoCompleteResult: [],
    checkAll: false,
    checkedList: [],
    plainOptions: [],
    layRecord: null,
    actionPre: [],
    data: [
      {
        key: '1',
        name: '胡彦斌',
        menuPre: '超级管理员',
        userPre: '用户管理，账户管理，质押管理',
        dec: '删除，添加，编辑，查看',
      },
      {
        key: '2',
        name: '胡彦斌',
        menuPre: '管理员',
        userPre: '用户管理',
        dec: '删除，添加',
      },
      {
        key: '3',
        name: '胡彦斌',
        menuPre: '管理员',
        userPre: '用户管理',
        dec: '删除，添加',
      },
      {
        key: '4',
        name: '胡彦斌',
        menuPre: '管理员',
        userPre: '用户管理，账户管理，质押管理',
        dec: '删除，添加',
      },
    ],
    /*  data2: [
      {
        key: 1,
        mp: '用户管理',
        children: [{ key: 11, mp: '用户查询' }, { key: 12, mp: '用户角色管理' }],
      },
      {
        key: 2,
        mp: '账户管理',
        children: [
          { key: 21, mp: '投资账户' },
          { key: 22, mp: '奖金账户' },
          { key: 23, mp: '对冲账户' },
          { key: 24, mp: '通证账户' },
        ],
      },
      {
        key: 3,
        mp: '套餐管理',
        children: [{ key: 31, mp: '套餐列表' }, { key: 32, mp: '套餐审核' }],
      },
      {
        key: 4,
        mp: '质押管理',
        children: [{ key: 41, mp: '质押列表' }, { key: 42, mp: '质押审核' }],
      },
      {
        key: 5,
        mp: '私塾管理',
        children: [{ key: 51, mp: '公告、媒体新闻维护' }],
      },
      {
        key: 6,
        mp: '数据统计',
        children: [
          { key: 61, mp: '充值统计' },
          { key: 62, mp: '提现' },
          { key: 63, mp: '套餐统计' },
          { key: 64, mp: '系统自动化Job运行状态' },
        ],
      },
      {
        key: 7,
        mp: '系统配置',
        children: [
          { key: 71, mp: '字典配置' },
          { key: 72, mp: '租户管理' },
          { key: 73, mp: '后台用户管理' },
        ],
      },
    ], */
    selectedRowKeys: [],
    visible1: false,
    visible2: false,
  };
  /*  filter = record => {
    let arr1 = [];
    let arr2 = [];
    if (record.children) {
      arr1.push(record.key);
      record.children.forEach(item => {
        arr1.push(item.key);
      });

      arr1.forEach(item => {
        arr2.push(`${item}-1`);
        arr2.push(`${item}-2`);
        arr2.push(`${item}-3`);
        arr2.push(`${item}-4`);
      });
      arr2.forEach(val => {
        if (!this.state.actionPre.includes(val)) {
          this.state.actionPre.push(val);
        }
      });
    }
  }; */
  Changebox1(checkedValues) {
    console.log(checkedValues);
  }
  Changebox2(checkedValues) {
    console.log(checkedValues);
  }
  handleChange1 = e => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChange2 = e => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleChange3 = e => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    console.log(value);
    if (value && value !== this.formRef1.props.form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    console.log(value);
    if (value && this.state.confirmDirty) {
      this.formRef1.props.form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  search() {
    console.log({ name: this.state.name, phone: this.state.phone, email: this.state.email });
  }
  reset() {
    this.setState({
      name: '',
      phone: '',
      email: '',
    });
  }
  showModal1 = () => {
    this.formRef1.props.form.resetFields();
    this.setState({
      visible1: true,
    });
  };

  handleOk1 = e => {
    console.log(e);
    console.log(this.formRef1.props.form);
    e.preventDefault();
    this.formRef1.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
  showModal2 = record => {
    this.formRef2.props.form.resetFields();
    this.setState({
      visible2: true,
      layRecord: record,
    });
  };

  handleOk2 = e => {
    console.log(e);
    e.preventDefault();
    this.formRef2.props.form.validateFields((err, values) => {
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
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onChange = checkedList => {
    this.setState({
      checkedList,
      checkAll: checkedList.length === this.state.actionPre.length,
    });
  };
  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? this.state.actionPre : [],
      checkAll: e.target.checked,
    });
  };
  //删除
  delete = id => {
    message.destroy();
    message.success('删除成功');
    console.log(id);
  };
  saveFormRef1 = form => {
    this.formRef1 = form;
  };
  saveFormRef2 = form => {
    this.formRef2 = form;
  };
  render() {
    const { loading, selectedRowKeys, autoCompleteResult } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const rowSelection2 = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <PageHeaderWrapper>
          <div className={styles.formes}>
            <span className={styles.mess}>
              <label htmlFor="name">用户名：</label>
              <Input id="name" onChange={this.handleChange1} value={this.state.name}></Input>
            </span>
            <span className={styles.mess}>
              <label htmlFor="phone">电话号码：</label>
              <Input id="phone" onChange={this.handleChange2} value={this.state.phone}></Input>
            </span>
            <span className={styles.mess}>
              <label htmlFor="email">邮箱：</label>
              <Input id="email" onChange={this.handleChange3} value={this.state.email}></Input>
            </span>
            <span className={styles.btn}>
              <Button type="primary" onClick={this.search.bind(this)}>
                查询
              </Button>
            </span>
            <span>
              <Button type="primary" onClick={this.reset.bind(this)}>
                重置
              </Button>
            </span>
          </div>
          <div>
            <Button type="primary" onClick={this.showModal1} className={styles.add}>
              用户添加
            </Button>
          </div>

          <div>
            <div style={{ marginBottom: 16 }}>
              <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                清空
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `已选 ${selectedRowKeys.length} 项` : ''}
              </span>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={this.columns}
              dataSource={this.state.data}
            />
          </div>
        </PageHeaderWrapper>
        <FormOne
          visible1={this.state.visible1}
          handleOk1={this.handleOk1}
          handleCancel1={this.handleCancel1}
          wrappedComponentRef={this.saveFormRef1}
          validateToNextPassword={this.validateToNextPassword}
          compareToFirstPassword={this.compareToFirstPassword}
          handleConfirmBlur={this.handleConfirmBlur}
          Changebox={this.Changebox1}
        />
        <FormTwo
          visible2={this.state.visible2}
          handleOk2={this.handleOk2}
          handleCancel2={this.handleCancel2}
          wrappedComponentRef={this.saveFormRef2}
          layRecord={this.state.layRecord}
          Changebox={this.Changebox2}
        />
      </div>
    );
  }
}
export default Backusers;
