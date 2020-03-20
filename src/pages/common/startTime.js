import React, { Component } from 'react';
import { DatePicker } from 'antd';
class DateRange extends React.Component {
  state = {
    startValue: null,
    /*  endValue: null,
    endOpen: false, */
  };

  disabledStartDate = startValue => {
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  render() {
    const { startValue } = this.state;
    return (
      <div>
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder={this.props.start}
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
      </div>
    );
  }
}
export default DateRange;
