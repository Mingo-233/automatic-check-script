const Http = require("./http");
// .env文件需和你起服务的文件在同一目录下
const dotenv = require("dotenv");
dotenv.config();

let h = "";
const initHttpAxios = (token) => {
  // if (!token) {
  // token = process.env.token;
  // throw new Error('token 不存在')
  // }
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

let checkTodayStatusUrl =
  "https://api.juejin.cn/growth_api/v2/get_today_status?aid=2608&uuid=7131217957565122084&spider=0";

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
  checkTodayStatus() {
    return h.get(checkTodayStatusUrl);
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
