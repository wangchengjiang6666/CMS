import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import numeral from 'numeral';
import styles from './Analysis.less';
import { Bar } from '@/components/Charts';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: formatMessage({ id: 'app.analysis.test' }, { no: i }),
    total: 323234,
  });
}

const SalesCard = memo(
  ({ rangePickerValue, salesData, isActive, handleRangePickerChange, loading, selectDate }) => {
    console.log(salesData);
    return (
      <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
        <div className={styles.salesCard}>
          <Tabs
            tabBarExtraContent={
              <div className={styles.salesExtraWrap}>
                <div className={styles.salesExtra}>
                  <a className={isActive('today')} onClick={() => selectDate('today')}>
                    <FormattedMessage id="app.analysis.all-day" defaultMessage="All Day" />
                  </a>
                  <a className={isActive('week')} onClick={() => selectDate('week')}>
                    <FormattedMessage id="app.analysis.all-week" defaultMessage="All Week" />
                  </a>
                  <a className={isActive('month')} onClick={() => selectDate('month')}>
                    <FormattedMessage id="app.analysis.all-month" defaultMessage="All Month" />
                  </a>
                  <a className={isActive('year')} onClick={() => selectDate('year')}>
                    <FormattedMessage id="app.analysis.all-year" defaultMessage="All Year" />
                  </a>
                </div>
                <RangePicker
                  value={rangePickerValue}
                  onChange={handleRangePickerChange}
                  style={{ width: 256 }}
                />
              </div>
            }
            size="large"
            tabBarStyle={{ marginBottom: 24 }}
          >
            <TabPane
              tab={<FormattedMessage id="app.analysis.sales" defaultMessage="Sales" />}
              key="sales"
            >
              <Row>
                <Col xl={18} lg={18} md={18} sm={24} xs={24}>
                  <div className={styles.salesBar}>
                    <Bar
                      height={295}
                      title={
                        <FormattedMessage
                          id="app.analysis.sales-trend"
                          defaultMessage="Sales Trend"
                        />
                      }
                      data={salesData}
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
      </Card>
    );
  }
);

export default SalesCard;
