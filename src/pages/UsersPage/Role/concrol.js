import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  InputNumber,
  DatePicker,
  Modal,
  message,
  Badge,
  Divider,
  Steps,
  Radio,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const { Option } = Select;
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
@connect(({ userrule, loading }) => ({
  userrule,
  loading: loading.models.rule,
}))
class Concrol extends PureComponent {
  state = {
    selectedRows: [],
  };
  columns = [
    {
      title: 'ID',
      dataIndex: 'name',
      render: text => <Link to={`/profile/basic/${text.replace(/\s+/gi, '-')}`}>{text}</Link>,
    },
    {
      title: '角色名',
      dataIndex: 'desc',
    },
    {
      title: '拥有角色',
      dataIndex: 'callNo',
      sorter: true,
      render: val => `${val} 万`,
      // mark to display a total number
      needTotal: true,
    },
    /* {
      title: '具体描述',
      dataIndex: 'status',
      filters: [
        {
          text: status[0],
          value: 0,
        },
        {
          text: status[1],
          value: 1,
        },
        {
          text: status[2],
          value: 2,
        },
        {
          text: status[3],
          value: 3,
        },
      ],
      render(val) {
        return <Badge status={statusMap[val]} text={status[val]} />;
      },
    }, */
    {
      title: '具体描述',
      dataIndex: 'updatedAt',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>修改</a>
          <Divider type="vertical" />
          <a href="">删除</a>
        </Fragment>
      ),
    },
  ];
  componentDidUpdate() {
    console.log(this.formRef);
  }
  handleChange(value) {
    console.log(value);
  }
  onSelect = value => {
    alert(123);
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'userrule/fetch',
      payload: params,
    });
  };
  /* handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'userrule/remove',
          payload: {
            key: selectedRows.map(row => row.key),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;
      default:
        break;
    }
  }; */
  render() {
    const {
      userrule: { data },
      loading,
    } = this.props;
    const { selectedRows } = this.state;
    return (
      <PageHeaderWrapper title="角色设置">
        <Card bordered={false}>
          <Form {...layout} ref={this.formRef} name="control-ref">
            <Form.Item name="gender" label="角色筛选">
              <Select
                onChange={this.handleChange.bind(this)}
                defaultValue="0"
                onSelect={this.onSelect}
              >
                <Option value="0">全部角色</Option>
                <Option value="1">管理员</Option>
                <Option value="2">超级管理员</Option>
                <Option value="3">普通用户</Option>
              </Select>
            </Form.Item>
          </Form>
        </Card>
        <StandardTable
          selectedRows={selectedRows}
          loading={loading}
          data={data}
          columns={this.columns}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
        />
      </PageHeaderWrapper>
    );
  }
}
export default Concrol;
