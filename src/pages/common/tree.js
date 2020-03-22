import React, { Component } from 'react';
import { Tree } from 'antd';
import { connect } from 'dva';
const { TreeNode } = Tree;
class MyTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoExpandParent: true,
      checkedKeys: ['1_1-1'],
      selectedKeys: [],
      treeData: [
        {
          key: '1',
          title: '用户管理',
          children: [
            {
              key: '1_1',
              title: '用户查询',
              children: [
                { key: '1_1-1', title: '查看' },
                { key: '1_1-2', title: '编辑' },
                { key: '1_1-3', title: '修改' },
                { key: '1_1-4', title: '删除' },
              ],
            },
            {
              key: '1_2',
              title: '黑名单管理',
              children: [
                { key: '1_2-1', title: '查看' },
                { key: '1_2-2', title: '编辑' },
                { key: '1_2-3', title: '修改' },
                { key: '1_2-4', title: '删除' },
              ],
            },
          ],
        },
        {
          key: '2',
          title: 'HC',
          children: [
            {
              key: '2_1',
              title: '用户详情',
              children: [
                { key: '2_1-1', title: '查看' },
                { key: '2_1-2', title: '编辑' },
                { key: '2_1-3', title: '修改' },
                { key: '2_1-4', title: '删除' },
              ],
            },
          ],
        },
        {
          key: '3',
          title: '订单管理',
          children: [
            {
              key: '3_1',
              title: '订单列表',
              children: [
                { key: '3_1-1', title: '查看' },
                { key: '3_1-2', title: '编辑' },
                { key: '3_1-3', title: '修改' },
                { key: '3_1-4', title: '删除' },
              ],
            },
          ],
        },
        {
          key: '4',
          title: '钱包管理',
          children: [
            {
              key: '4_1',
              title: '充值查询',
              children: [
                { key: '4_1-1', title: '查看' },
                { key: '4_1-2', title: '编辑' },
                { key: '4_1-3', title: '修改' },
                { key: '4_1-4', title: '删除' },
              ],
            },
            {
              key: '4_2',
              title: '提现查询',
              children: [
                { key: '4_2-1', title: '查看' },
                { key: '4_2-2', title: '编辑' },
                { key: '4_2-3', title: '修改' },
                { key: '4_2-4', title: '删除' },
              ],
            },
            {
              key: '4_3',
              title: '转账查询',
              children: [
                { key: '4_3-1', title: '查看' },
                { key: '4_3-2', title: '编辑' },
                { key: '4_3-3', title: '修改' },
                { key: '4_3-4', title: '删除' },
              ],
            },
            {
              key: '4_4',
              title: '余额查询',
              children: [
                { key: '4_4-1', title: '查看' },
                { key: '4_4-2', title: '编辑' },
                { key: '4_4-3', title: '修改' },
                { key: '4_4-4', title: '删除' },
              ],
            },
          ],
        },
        {
          key: '5',
          title: '数据统计',
          children: [
            {
              key: '5_1',
              title: '发放红包记录',
              children: [
                { key: '5_1-1', title: '查看' },
                { key: '5_1-2', title: '编辑' },
                { key: '5_1-3', title: '修改' },
                { key: '5_1-4', title: '删除' },
              ],
            },
            {
              key: '5_2',
              title: '消费基金发放记录',
              children: [
                { key: '5_2-1', title: '查看' },
                { key: '5_2-2', title: '编辑' },
                { key: '5_2-3', title: '修改' },
                { key: '5_2-4', title: '删除' },
              ],
            },
          ],
        },

        {
          key: '6',
          title: '系统配置',
          children: [
            {
              key: '6_1',
              title: '字典配置',
              children: [
                { key: '6_1-1', title: '查看' },
                { key: '6_1-2', title: '编辑' },
                { key: '6_1-3', title: '修改' },
                { key: '6_1-4', title: '删除' },
              ],
            },
            {
              key: '6_2',
              title: '币种管理',
              children: [
                { key: '6_2-1', title: '查看' },
                { key: '6_2-2', title: '编辑' },
                { key: '6_2-3', title: '修改' },
                { key: '6_2-4', title: '删除' },
              ],
            },
            {
              key: '6_3',
              title: '后台用户管理',
              children: [
                { key: '6_3-1', title: '查看' },
                { key: '6_3-2', title: '编辑' },
                { key: '6_3-3', title: '修改' },
                { key: '6_3-4', title: '删除' },
              ],
            },
            {
              key: '6_4',
              title: '角色管理',
              children: [
                { key: '6_4-1', title: '查看' },
                { key: '6_4-2', title: '编辑' },
                { key: '6_4-3', title: '修改' },
                { key: '6_4-4', title: '删除' },
              ],
            },
            {
              key: '6_5',
              title: '产品管理',
              children: [
                { key: '6_5-1', title: '查看' },
                { key: '6_5-2', title: '编辑' },
                { key: '6_5-3', title: '修改' },
                { key: '6_5-4', title: '删除' },
              ],
            },
          ],
        },
      ],
    };
  }
  componentDidMount() {
    this.setState({});
  }
  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };
  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} />;
    });
  render() {
    return (
      <ul>
        <Tree
          checkable
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
          value={this.state}
        >
          {this.renderTreeNodes(this.state.treeData)}
        </Tree>
      </ul>
    );
  }
}
export default connect(
  null,
  dispatch => {
    return {
      setTreeState: values => {
        dispatch({
          type: 'global/setTreeState',
          payload: values,
        });
      },
    };
  }
)(MyTree);
