import React, { Component } from 'react';
import { message, Button } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'react-router-dom';
const error = () => {
  message.error('权限不足');
};
class Btn extends Component {
  state = {
    num: '',
    passBtn: [],
  };
  num = '';
  componentDidMount() {
    console.log(this.props.match.path);
    switch (this.props.match.path) {
      case '/dashboard':
        this.num = '0';
        break;
      case '/userPage/search':
        this.num = '1_1';
        break;
      case '/ccountPage/investor':
        this.num = '2_1';
        break;
      case '/treamPage/treammes':
        this.num = '3_1';
        break;
      case '/pledgePage/pledgetable':
        this.num = '4_1';
        break;
      case '/pesonalPage/media':
        this.num = '5_1';
        break;
      case '/dataPage/recharge':
        this.num = '6_1';
        break;
      case '/system/diction':
        this.num = '7_1';
        break;
      case '/system/lessee':
        this.num = '7_2';
        break;
      case '/system/backusers':
        this.num = '7_3';
        break;
      case '/system/roleset':
        this.num = '7_4';
        break;
      default:
        this.num = '0';
    }
    this.props.btnList.forEach(item => {
      if (item.split('-')[0] === this.num) {
        this.state.passBtn.push(item.split('-')[1]);
      }
    });
  }
  componentDidMount() {
    console.log(this.props.btnList);
  }
  isRun = () => {
    message.destroy();
    let flog = this.state.passBtn.includes(this.props.type);
    if (true) {
      this.props.meths(this.props.record);
    } else {
      error();
    }
  };
  render() {
    return <div onClick={this.isRun}>{this.props.children}</div>;
  }
}
export default connect(({ menu }) => {
  return {
    btnList: menu.actionPre,
  };
})(withRouter(Btn));
