//请求拦截
import axios from 'axios';
import { message } from 'antd';
const req = axios.create({
  baseUrl: 'http://hc-app-api.ap-southeast-1.elasticbeanstalk.com:8080',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});
req.interceptors.request.use(
  config => {
    let jwtData = window.sessionStorage.getItem('jwt');
    if (jwtData) {
      jwtData = JSON.parse(jwtData);
      config.headers.authorization = jwtData;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
req.interceptors.response.use(
  response => {
    let result = response.data;
    console.log(result.code);
    if (result.code && result.code !== 0) {
      message.error(result.msg);
      return Promise.reject(result.msg);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default req;
