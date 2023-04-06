import axios from "axios";
import { message } from "antd";
import Qs from "qs"

//创建一个axios示例

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  }
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_API

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.withCredentials = true;
    if (!config.isShow && config.method.toUpperCase() === 'POST') {
      config.data = Qs.stringify(config.data)
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    if (+res.state === 1 || +res.code === 1) {
      return response.data
    } else if (res.rows) {
      return response.data
    }
    else if (res.state === 0 || res.code === 0) {
      message.error(res.msg)
    }
    else if (!res.state && !res.code) { //针对上传图片
      return res
    } else {
      message({
        content: res.message,
        type: 'error',
        duration: 50 * 1000
      })
      // if (res.state || res.code) {
      //   message.error(res.msg)
      // }

      return Promise.reject('error')
    }

  },
  error => {
    console.log("request err:" + error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    config.withCredentials = true;
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    return config
  }
)




