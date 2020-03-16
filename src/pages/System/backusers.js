import React, { Component, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import StandardTable from '@/components/StandardTable';
import styles from './backusers.less';
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
} from 'antd';

@Form.create()
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
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.showModal2(record)}>修改</a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              this.delete(record);
            }}
          >
            删除
          </a>
        </Fragment>
      ),
    },
  ];
  /*  columns2 = [
    {
      title: '菜单权限',
      dataIndex: 'mp',
      key: 'mp',
    },
    {
      title: () => {
        return (
          <span>
            <span className={styles.boxs}>
              <Checkbox onChange={this.onCheckAllChange} checked={this.state.checkAll} />
            </span>
            操作权限
          </span>
        );
      },
      render: (text, record) => {
        console.log(record);
        this.filter(record);
        this.state.plainOptions = [
          { label: '查看', value: `${record.key}-1` },
          { label: '添加', value: `${record.key}-2` },
          { label: '编辑', value: `${record.key}-3` },
          { label: '删除', value: `${record.key}-4` },
        ];

        return (
          <Checkbox.Group
            options={this.state.plainOptions}
            defaultValue={[]}
            onChange={this.onChange}
            value={this.state.checkedList}
          />
        );
      },
      dataIndex: 'up',
      key: 'up',
    },
  ]; */

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
  Changebox(checkedValues) {
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
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
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
  showModal2 = record => {
    console.log(record);
    this.setState({
      visible2: true,
      layRecord: record,
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
    console.log(id);
  };
  //设置默认值

  render() {
    this.props.form;
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

    const { getFieldDecorator } = this.props.form;
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
        <Modal
          title="添加用户"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className={styles.down}>
              <Form.Item label="用户名">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      type: 'text',
                      message: '请输入用户名',
                    },
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
                      type: 'number',
                      message: '请输入正确的手机号码',
                    },
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
                      message: '请输入正确的手机号码',
                    },
                    {
                      validator: this.validateToNextPassword,
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
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
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
                  <Checkbox.Group style={{ width: '100%' }} onChange={this.Changebox}>
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
            {/*  <div>
              <h3>权限分配</h3>
              <div>
                <Table
                  rowSelection={rowSelection2}
                  columns={this.columns2}
                  dataSource={this.state.data2}
                  pagination={false}
                />
              </div>
            </div> */}
          </div>
        </Modal>
        <Modal
          title="修改用户角色"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          width="900px"
        >
          <div>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className={styles.down}>
              <Form.Item label="用户名">
                {getFieldDecorator('username', {
                  initialValue: this.state.layRecord ? this.state.layRecord.name : '',
                  rules: [
                    {
                      type: 'text',
                      message: '请输入用户名',
                    },
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="现有角色">
                {getFieldDecorator('nowRole', {
                  initialValue: this.state.layRecord ? this.state.layRecord.menuPre : '',
                  rules: [
                    {
                      type: 'text',
                      message: '请输入正确的手机号码',
                    },
                    {
                      required: true,
                      message: '请输入正确的手机号码',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="新角色">
                {getFieldDecorator('newrole', {
                  valueProName: 'checked',
                  rules: [
                    {
                      required: true,
                      message: '请选择角色',
                    },
                  ],
                })(
                  <Checkbox.Group style={{ width: '100%' }} onChange={this.Changebox}>
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
      </div>
    );
  }
}
export default Backusers;
