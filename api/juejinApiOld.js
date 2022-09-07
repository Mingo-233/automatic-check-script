const axios = require("axios");
const { circularReference } = require("../utils/tools");
const inputHandler = require("../ioTxt");
axios.interceptors.request.use(
  (config) => {
    const aheaders = {
      cookie:
        "_ga=GA1.2.817573689.1660366074; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227131217957565122084%2522%252C%2522user_unique_id%2522%253A%25227131217957565122084%2522%252C%2522timestamp%2522%253A1660366074458%257D; passport_csrf_token=8bf1f097d295c60c8cc84d4662713cfb; passport_csrf_token_default=8bf1f097d295c60c8cc84d4662713cfb; MONITOR_WEB_ID=ec040b3a-630d-43f8-804f-c287891371cb; _tea_utm_cache_2018=undefined; _gid=GA1.2.1587286200.1661517736; n_mh=Kt07ecmmto2QqF7hHsSv6O-BST01Y0OAX3z6lbozBqk; sid_guard=a68d38d43bc77d0d5d153b7bcb8438e2%7C1661520811%7C31536000%7CSat%2C+26-Aug-2023+13%3A33%3A31+GMT; uid_tt=7ce151630caeb8c4c06e992f7b83bb1f; uid_tt_ss=7ce151630caeb8c4c06e992f7b83bb1f; sid_tt=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid_ss=a68d38d43bc77d0d5d153b7bcb8438e2; sid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI; ssid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI",
      // "_ga=GA1.2.817573689.1660366074; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%7B%22web_id%22%3A%227131217957565122084%22%2C%22user_unique_id%22%3A%227131217957565122084%22%2C%22timestamp%22%3A1660366074458%7D; passport_csrf_token=8bf1f097d295c60c8cc84d4662713cfb; passport_csrf_token_default=8bf1f097d295c60c8cc84d4662713cfb; MONITOR_WEB_ID=ec040b3a-630d-43f8-804f-c287891371cb; _gid=GA1.2.937817016.1661427764; _tea_utm_cache_2018=undefined; n_mh=f7IbdOePTc_oRm78V6KzkaK-t_o280ERqKS7el_5R6E; sid_guard=27fbbd7ad05a17df0a35186ea5921ad3|1661429047|31536000|Fri,+25-Aug-2023+12:04:07+GMT; uid_tt=cd5b03ccb424a2b52533dbcad1ee33af; uid_tt_ss=cd5b03ccb424a2b52533dbcad1ee33af; sid_tt=27fbbd7ad05a17df0a35186ea5921ad3; sessionid=27fbbd7ad05a17df0a35186ea5921ad3; sessionid_ss=27fbbd7ad05a17df0a35186ea5921ad3; sid_ucp_v1=1.0.0-KGYwYzc0NzYwNjM2OWU0NGIyODYyYjBkMDIwOTMzMGZjZjYyOWM0ZDQKFwjn3oD9to3pARC3yp2YBhiwFDgCQO8HGgJsZiIgMjdmYmJkN2FkMDVhMTdkZjBhMzUxODZlYTU5MjFhZDM; ssid_ucp_v1=1.0.0-KGYwYzc0NzYwNjM2OWU0NGIyODYyYjBkMDIwOTMzMGZjZjYyOWM0ZDQKFwjn3oD9to3pARC3yp2YBhiwFDgCQO8HGgJsZiIgMjdmYmJkN2FkMDVhMTdkZjBhMzUxODZlYTU5MjFhZDM",
    };
    // @ts-ignore
    Object.assign(config.headers, aheaders);
    return config;
  },
  (error) => {
    return error;
  }
);
const getBookList = () => {
  const url =
    "https://api.juejin.cn/booklet_api/v1/booklet/bookletshelflist?aid=2608&uuid=7131217957565122084&spider=0";
  axios
    .post(url)
    .then((response) => {
      // console.log(response);

      console.log(response.data);
      //   let content = JSON.stringify(response);

      inputHandler(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const postSign = () => {
  const url =
    "https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=7131217957565122084&spider=0&_signature=_02B4Z6wo00101TetangAAIDBr8b9CPHTKKE3qW7AAC7v8ihQDke3NjDChM33tV0xnNbB4f9vyrOWcHwQ9mBTrm-.jB8t29Lq-JtRNHy5bnfkcau.iMc0tdXl5hB6lguMl3oml3GyfogXWNTFcd";

  axios
    .post(url)
    .then((response) => {
      // console.log(response);

      console.log(response.data);
      let content = circularReference(response);

      inputHandler(JSON.stringify(content));
      //   inputHandler(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
const post = (url) => {
  return axios
    .post(url)
    .then((response) => {
      console.log(response.data);
      let content = circularReference(response);
      inputHandler(JSON.stringify(content));
      //   inputHandler(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// 抽奖
let luckDrawUrl =
  "https://api.juejin.cn/growth_api/v1/lottery/draw?aid=2608&uuid=7131217957565122084&spider=0&_signature=_02B4Z6wo00901Ts-dDAAAIDBo1XjQyhwwzU7OnCAAC3KA9zgofc9sQA.WvUK11LdSRyTIZnXUUmmmqyf0Fx9SbwKQxH8b4wJdEdLsjzmtmlaVYIudiTO8mCWKbOD1uGVrw6fdqGjSA.dXyFH92";

let xiqi =
  "https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608&uuid=7131217957565122084&spider=0";
// lottery_history_id: "7135665166527512607";add
https: module.exports = {
  getBookListApi: getBookList,
  // getBookListApi(params) {
  //   return http.get(bookListUrl, params);
  // },
  postSignApi: postSign,
  // luckDrawApi: post(luckDrawUrl),
};
