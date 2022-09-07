const axios = require("axios");
const emailSend = require("../utils/emailSend");
const { circularReference } = require("../utils/tools");
const logger = require("../utils/winston");
const inputHandler = require("../ioTxt");
// axios.defaults.timeout = 10000;
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.interceptors.request.use(
  (config) => {
    const aheaders = {
      // "Accept-Language": "zh-CN",
    };
    // @ts-ignore
    Object.assign(config.headers, aheaders);
    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use((config) => {
  return config;
});

class Http {
  token;
  constructor(token) {
    this.token = token;
    axios.defaults.headers.post["cookie"] = token;
  }
  get(url, params) {
    console.log("re");
    return new Promise((resolve, reject) => {
      console.log(url);
      axios
        .get(url, { params })
        .then((res) => {
          // inputHandler(JSON.stringify(res.data));
          logger.info(res.data);
          console.log(res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          // inputHandler(JSON.stringify(res.data));
          logger.info(res.data);
          // emailSend(JSON.stringify(res.data));
          resolve({ ...res.data, url });
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
}
module.exports = Http;
