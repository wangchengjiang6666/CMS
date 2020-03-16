import React, { memo, useState, useEffect } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import numeral from 'numeral';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import Yuan from '@/utils/Yuan';
import req from '../../services/req.js';
import axois from 'axios';

/* req.post('/url/rest/tBackAdminAcct/HCAmount').then(res => {
  return console.log(res);
}); */

//---------------------------------------------------------------------

//----------------------------------------------------------------------
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};
const IntroduceRow = memo(({ loading, visitData }) => {
  const [usdt, setUsdt] = useState(333221.3494);
  const [mof, setMof] = useState(1668423.1439);
  const [hc, setHc] = useState(45564.244277);
  const [mail, setMail] = useState(80614);
  const [app, setApp] = useState(0);
  const [usnum, setUsnum] = useState(8777);
  const [mofnum, setMofnum] = useState(72978);
  useEffect(() => {
    axois
      .post('/url/rest/tBackAdminAcct/HCAmount')
      .then(res => {
        console.log(res);
        let num = Number(res.data.data);
        setHc(num.toFixed(4));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axois.post('/url/rest/tBackAdminAcct/UMEAmount').then(res => {
      console.log(res);
      console.log(res.data.data.result);
      let respon = res.data.data.result;
      if (respon) {
        let num1 = respon[0].balance / Math.pow(10, respon[0].decimals);
        let num2 = respon[1].balance / Math.pow(10, respon[1].decimals);
        setMof(num1.toFixed(4));
        setUsdt(num2.toFixed(4));
        setUsnum(respon[0].txs);
        setMofnum(respon[1].txs);
      }
    });
  }, []);
  useEffect(() => {
    axois.post('/url/rest/tBackAdminAcct/emailAmount').then(res => {
      console.log(res);
      console.log(res.data.data.balance);
      let respon = res.data.data;
      if (respon) {
        setMail(respon.balance);
      }
    });
  }, []);
  return (
    <div className="myPipe">
      <h3>余额监控</h3>
      <Row gutter={24}>
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="HC"
            action={
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
              >
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            loading={loading}
            total={hc}
            footer={
              <Field
                label={
                  <FormattedMessage id="app.analysis.day-sales" defaultMessage="Daily Sales" />
                }
                value={`￥${numeral(12423).format('0,0')}`}
              />
            }
            contentHeight={46}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              <FormattedMessage id="app.analysis.day" defaultMessage="Daily Changes" />
              <span className={styles.trendText}>11%</span>
            </Trend>
          </ChartCard>
        </Col>

        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            loading={loading}
            title="USDT"
            action={
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
              >
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            total={usdt}
            footer={<Field label="交易笔数" value={usnum} />}
            contentHeight={46}
          >
            <MiniArea color="#975FE4" data={visitData} />
          </ChartCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            loading={loading}
            title="MOF"
            action={
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
              >
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            total={mof}
            footer={<Field label="交易笔数" value={mofnum} />}
            contentHeight={46}
          >
            <MiniBar data={visitData} />
          </ChartCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ChartCard
            loading={loading}
            bordered={false}
            title="邮件发放余额"
            action={
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
              >
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            total={mail}
            footer={
              <MiniProgress
                percent={100}
                strokeWidth={8}
                target={100}
                targetLabel={`${formatMessage({
                  id: 'component.miniProgress.tooltipDefault',
                }).concat(': ')}100%`}
                color="#13C2C2"
              />
            }
            contentHeight={46}
          >
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <Trend flag="down">
                <FormattedMessage id="app.analysis.day" defaultMessage="Weekly Changes" />
                <span className={styles.trendText}>11%</span>
              </Trend>
            </div>
          </ChartCard>
        </Col>
      </Row>
    </div>
  );
});

export default IntroduceRow;
