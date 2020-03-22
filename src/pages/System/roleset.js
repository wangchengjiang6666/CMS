import React, { Component, Fragment } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './roleset.less';
import MyTree from '../common/tree';
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
const { Option } = Select;

class Roleset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputval: '',
      visible: false,
      visible2: false,
      loading: false,
      plainOptions: [],
      actionPre: [],
      checkedList: [],
      checkAll1: false,
      checkAll2: false,
      selectedRows: [],
      selectedRowKeys: [],
      currentRole: '',
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      data2: [
        {
          key: '1',
          mp: '用户管理',
          sons: [{ key: '1_1', mp: '用户查询' }, { key: '1_2', mp: '用户角色管理' }],
        },
        {
          key: '2',
          mp: '账户管理',
          sons: [
            { key: '2_1', mp: '投资账户' },
            { key: '2_2', mp: '奖金账户' },
            { key: '2_3', mp: '对冲账户' },
            { key: '2_4', mp: '通证账户' },
          ],
        },
        {
          key: '3',
          mp: '套餐管理',
          sons: [{ key: '3_1', mp: '套餐列表' }, { key: '3_2', mp: '套餐审核' }],
        },
        {
          key: '4',
          mp: '质押管理',
          sons: [{ key: '4_1', mp: '质押列表' }, { key: '4_2', mp: '质押审核' }],
        },
        {
          key: '5',
          mp: '私塾管理',
          sons: [{ key: '5_1', mp: '公告、媒体新闻维护' }],
        },
        {
          key: '6',
          mp: '数据统计',
          sons: [
            { key: '6_1', mp: '充值统计' },
            { key: '6_2', mp: '提现' },
            { key: '6_3', mp: '套餐统计' },
            { key: '6_4', mp: '系统自动化Job运行状态' },
          ],
        },
        {
          key: '7',
          mp: '系统配置',
          sons: [
            { key: '7_1', mp: '字典配置' },
            { key: '7_2', mp: '租户管理' },
            { key: '7_3', mp: '后台用户管理' },
          ],
        },
      ],
    };
  }

  /*  columns2 = [
    {
      title: '菜单权限',
      dataIndex: 'mp',
      key: 'mp',
      render: (text, record) => {
        console.log(text, record);
      
        return <span>
            
        </span>
      }
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
       
        let num = record.key.toString();
        if (num.length === 1) {
          this.filter(record);
          return '';
        } else {
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
        }
      },
      dataIndex: 'up',
      key: 'up',
    },
  ]; */
  columns = [
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '菜单权限',
      dataIndex: 'menuPremiss',
      key: 'menuPremiss',
    },
    {
      title: '操作权限',
      dataIndex: 'actionPremiss',
      key: 'actionPremiss',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.showModal2(record)}>修改</a>
          <Divider type="vertical" />
          <a href="" onClick={() => this.delete(record)}>
            删除
          </a>
        </Fragment>
      ),
    },
  ];
  data = [
    {
      key: '1',
      role: '超级管理员',
      menuPremiss: '用户管理，账户管理，系统配置',
      actionPremiss: '查看，删除，添加，编辑',
    },
    {
      key: '2',
      role: '管理员',
      menuPremiss: '用户管理，账户管理',
      actionPremiss: '查看，删除',
    },
    {
      key: '3',
      role: '客户',
      menuPremiss: '用户查询',
      actionPremiss: '查看，删除',
    },
  ];
  rowSelection2 = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.setState({
        selectedRows: selectedRows,
      });
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      this.setState({
        ' selectedRows': selectedRows,
      });
      console.log(selected, selectedRows, changeRows);
    },
  };
  hasPremiss = () => {};

  filter = record => {
    console.log(record);
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
  };
  onCheckAllChange1 = e => {
    console.log(this.state.actionPre);
    this.setState({
      checkedList: e.target.checked ? this.state.actionPre : [],
      checkAll: e.target.checked,
    });
  };
  onCheckAllChange2 = e => {
    console.log(this.state.actionPre);
    this.setState({
      checkedList: e.target.checked ? this.state.actionPre : [],
      checkAll: e.target.checked,
    });
  };
  onChange = checkedList => {
    console.log(checkedList);
    this.setState({
      checkedList,
      checkAll: checkedList.length === this.state.actionPre.length,
    });
  };
  changval = e => {
    this.setState({
      inputval: e.target.value,
    });
  };
  Selectval = value => {
    console.log(value);
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  delete = record => {
    message.destroy();
    message.success('删除成功');
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  showModal2 = record => {
    console.log(record);
    this.setState({
      visible2: true,
      currentRole: record.role,
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

  //重新生成带有结构的数组
  filterup = () => {
    console.log(this.state.selectedRows, this.state.checkedList);
    let newselectedRows = this.state.selectedRows;
    let newcheckedList = this.state.checkedList;
    newselectedRows.forEach((item, num) => {
      let arr1 = [];
      if (item.key.length == 1) {
        newselectedRows.forEach((val, index) => {
          let newval = val.key.length > 1 ? val.key.split('_')[0] : '';
          if (item.key == newval) {
            arr1.push(val);
            console.log(index);
            item.children = arr1;
          }
        });
      } else {
        let news = item.key.split('_')[0];
        this.state.actionPre.forEach((i, j) => {
          if (i.key == news) {
            newselectedRows[num] = {
              key: i.key,
              mp: i.mp,
              children: '',
            };
          }
        });
      }
    });
    //let upselectedRows = [...newselectedRows];
    newselectedRows.forEach((item, index) => {
      item.key.length > 1 ? newselectedRows.splice(index, 1) : '';
    });
    console.log(newselectedRows);
  };
  render() {
    const { loading, selectedRowKeys, autoCompleteResult } = this.state;
    /*  const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }; */
    /*  const rowSelection2 = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRows: selectedRows,
        });
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        this.setState({
          ' selectedRows': selectedRows,
        });
        console.log(selected, selectedRows, changeRows);
      },
    }; */
    /*   const hasSelected = selectedRowKeys.length > 0; */
    return (
      <div>
        <PageHeaderWrapper>
          <div className={styles.myform}>
            <Row gutter={8}>
              <span>全部角色：</span>
              <Select
                style={{ width: 200, marginRight: 20 }}
                onChange={this.Selectval}
                defaultValue="0"
              >
                <Option value="0">超级管理员</Option>
                <Option value="1">管理员</Option>
                <Option value="2">客户</Option>
              </Select>
              <Button type="primary" onClick={this.showModal}>
                角色添加
              </Button>
            </Row>
          </div>
          <div>
            <Table columns={this.columns} dataSource={this.data} />
          </div>
        </PageHeaderWrapper>
        <Modal
          title="角色权限设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="900px"
        >
          <div>
            <div className={styles.myinput}>
              <Input placeholder="请输入新角色名称" style={{ width: 200 }}></Input>
            </div>
            <div>
              <h3 style={{ textAlign: 'center' }}>权限分配</h3>
              <div className={styles.mytable}>
                <MyTree />
                {/*   <Table
                  rowSelection={this.rowSelection2}
                  columns={this.columns2}
                  dataSource={this.state.data2}
                  pagination={false}
                /> */}
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          title="角色权限修改"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          width="900px"
        >
          <div>
            <div className={styles.myinput}>
              <Input style={{ width: 200 }} value={this.state.currentRole}></Input>
            </div>
            <div>
              <h3 style={{ textAlign: 'center' }}>权限分配</h3>
              <div className={styles.mytable}>
                <MyTree currentRole={this.state.currentRole} />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Roleset;
