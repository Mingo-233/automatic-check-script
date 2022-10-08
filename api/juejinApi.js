const Http = require("./http");

let h = "";
// let h = new Http(
// "_ga=GA1.2.817573689.1660366074; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227131217957565122084%2522%252C%2522user_unique_id%2522%253A%25227131217957565122084%2522%252C%2522timestamp%2522%253A1660366074458%257D; passport_csrf_token=8bf1f097d295c60c8cc84d4662713cfb; passport_csrf_token_default=8bf1f097d295c60c8cc84d4662713cfb; MONITOR_WEB_ID=ec040b3a-630d-43f8-804f-c287891371cb; _tea_utm_cache_2018=undefined; _gid=GA1.2.1587286200.1661517736; n_mh=Kt07ecmmto2QqF7hHsSv6O-BST01Y0OAX3z6lbozBqk; sid_guard=a68d38d43bc77d0d5d153b7bcb8438e2%7C1661520811%7C31536000%7CSat%2C+26-Aug-2023+13%3A33%3A31+GMT; uid_tt=7ce151630caeb8c4c06e992f7b83bb1f; uid_tt_ss=7ce151630caeb8c4c06e992f7b83bb1f; sid_tt=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid_ss=a68d38d43bc77d0d5d153b7bcb8438e2; sid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI; ssid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI"
// );
const initHttpAxios = (token) => {
  if (!token) {
    token =
      "_ga=GA1.2.817573689.1660366074; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227131217957565122084%2522%252C%2522user_unique_id%2522%253A%25227131217957565122084%2522%252C%2522timestamp%2522%253A1660366074458%257D; passport_csrf_token=8bf1f097d295c60c8cc84d4662713cfb; passport_csrf_token_default=8bf1f097d295c60c8cc84d4662713cfb; MONITOR_WEB_ID=ec040b3a-630d-43f8-804f-c287891371cb; _tea_utm_cache_2018=undefined; _gid=GA1.2.1587286200.1661517736; n_mh=Kt07ecmmto2QqF7hHsSv6O-BST01Y0OAX3z6lbozBqk; sid_guard=a68d38d43bc77d0d5d153b7bcb8438e2%7C1661520811%7C31536000%7CSat%2C+26-Aug-2023+13%3A33%3A31+GMT; uid_tt=7ce151630caeb8c4c06e992f7b83bb1f; uid_tt_ss=7ce151630caeb8c4c06e992f7b83bb1f; sid_tt=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid=a68d38d43bc77d0d5d153b7bcb8438e2; sessionid_ss=a68d38d43bc77d0d5d153b7bcb8438e2; sid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI; ssid_ucp_v1=1.0.0-KDJmMjJlZmM4MTgzOGY3MTFkYjA1NTAzZjJkZWMyNDMxN2M2ZjdmMzAKFwiO4pHVqvTrBRCrl6OYBhiwFDgCQO8HGgJsZiIgYTY4ZDM4ZDQzYmM3N2QwZDVkMTUzYjdiY2I4NDM4ZTI";
  }
  h = new Http(token);
};
let bookListUrl =
  "https://api.juejin.cn/booklet_api/v1/booklet/bookletshelflist?aid=2608&uuid=7131217957565122084&spider=0";
// 抽奖
let luckDrawUrl =
  "https://api.juejin.cn/growth_api/v1/lottery/draw?aid=2608&uuid=7131217957565122084&spider=0&_signature=_02B4Z6wo00901Ts-dDAAAIDBo1XjQyhwwzU7OnCAAC3KA9zgofc9sQA.WvUK11LdSRyTIZnXUUmmmqyf0Fx9SbwKQxH8b4wJdEdLsjzmtmlaVYIudiTO8mCWKbOD1uGVrw6fdqGjSA.dXyFH92";

let loginUrl =
  "https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=7131217957565122084&spider=0&_signature=_02B4Z6wo00101TetangAAIDBr8b9CPHTKKE3qW7AAC7v8ihQDke3NjDChM33tV0xnNbB4f9vyrOWcHwQ9mBTrm-.jB8t29Lq-JtRNHy5bnfkcau.iMc0tdXl5hB6lguMl3oml3GyfogXWNTFcd";

// 沾沾喜气
let touchHappyUrl =
  // "https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608&uuid=7131217957565122084&spider=0";
  "https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608&uuid=7073392340530513442&spider=0";
// lottery_history_id: "7135665166527512607";add
// 7136452057275465762

// 沾沾喜气的卡片list
let happyCardUrl =
  "https://api.juejin.cn/growth_api/v1/lottery_history/global_big?aid=2608&uuid=7073392340530513442&spider=0";
let submitReadProgressUrl =
  "https://api.juejin.cn/booklet_api/v1/reading/submit_progress?aid=2608&uuid=7131217957565122084&spider=0";
let getSectionDetailsUrl =
  "https://api.juejin.cn/booklet_api/v1/section/get?aid=2608&uuid=7131217957565122084&spider=0";

let bookSectionOfViteUrl =
  "https://api.juejin.cn/booklet_api/v1/booklet/get?aid=2608&uuid=7131217957565122084&spider=0";

// 未收集的bug
let bugfixListUrl =
  "https://api.juejin.cn/user_api/v1/bugfix/not_collect?aid=2608&uuid=7073392340530513442&spider=0";

let collectBugUrl =
  "https://api.juejin.cn/user_api/v1/bugfix/collect?aid=2608&uuid=7073392340530513442&spider=0";
const juejinApi = {
  getBookList() {
    return h.post(bookListUrl);
  },
  postSign() {
    return h.post(loginUrl);
  },
  luckDraw() {
    return h.post(luckDrawUrl);
  },
  touchHappy(id) {
    return h.post(touchHappyUrl, { lottery_history_id: id });
  },
  getHappyCardList() {
    return h.post(happyCardUrl, { page_no: 1, page_size: 5 });
  },
  // vip 阅读任务
  postReadTask(id) {
    // 第一节 7050063812044685343
    // 第二节 7077834799208988675;
    // 这个接口原本是拿小测某章节的具体内容，但是在后端有隐藏逻辑：每访问一次会执行，vip的每日阅读任务
    return h.post(getSectionDetailsUrl, {
      section_id: id,
    });

    // return h.post(submitReadProgressUrl, {
    //   booklet_id: "7050063811973218341",
    //   reading_position: 17,
    //   section_id: "7077834799208988675",
    // });
  },
  // 获得掘金小册 章节信息
  getBookSectionOfVite(id = "7050063811973218341") {
    //深入浅出vite 小册 id 7050063811973218341;
    return h.post(bookSectionOfViteUrl, { booklet_id: id });
  },
  // 收集bug活动 获取未收集bug列表
  getBugListGame() {
    return h.post(bugfixListUrl, {});
    // bug_show_type: 1;
    // bug_time: 1665158400;
    // bug_type: 12;
    // is_first: true;
  },
  postBugCollectGame({ bug_time, bug_type }) {
    return h.post(collectBugUrl, { bug_time, bug_type });
  },
};
// 要调用方法 必须先执行初始化方法 initHttpAxios;
module.exports = {
  initHttpAxios,
  juejinApi,
};

// interface juejinApiT {
//   getBookList: () => Promise<ResType<any>>;
//   postSign: () => Promise<ResType<any>>;
//   luckDraw: () => Promise<ResType<any>>;
//   touchHappy: (_params: {
//     lottery_history_id: string,
//   }) => Promise<ResType<touchHappyDataT>>;
// }

// interface ResType<T> {
//   code: number;
//   data?: T;
//   msg: string;
//   err?: string;
// }

// interface touchHappyDataT {
//   dip_action: number;
//   has_dip: boolean; // 今天是否已经领取过
//   total_value: number; // 总共幸运值
//   dip_value: number; //当前获取的幸运值
// }
