const express = require("express");
const fs = require("fs");
const app = new express();
const port = 3000;
const Interval = require("./utils/node-schedule");
const schedule = require("node-schedule");
const emailSend = require("./utils/emailSend");
const redisConnectHandle = require("./redis/app");
const {
  getBookList,
  postSign,
  luckDraw,
  getHappyCardList,
  touchHappy,
} = require("./api/juejinApi");
const { vipReadTask } = require("./task/index");

let mainSchedule = new Interval({
  unit_name: "科教兴国定时任务",
  maintain_time: "10 1 8 * * *", //每天八点执行
});
mainSchedule.create(async () => {
  try {
    // 签到
    const res = await postSign();
    if (res.err_no && res.err_no !== 0) {
      throw Error(JSON.stringify(res));
    }
    // 抽奖
    luckDraw();
    const { data } = await getHappyCardList();
    // 抽幸运卡
    touchHappy(data.lotteries[0].history_id);
    vipReadTask();
  } catch (error) {
    console.log(error);
    emailSend(error.message);
  }
});

// // 启动临时任务
// let rule = new schedule.RecurrenceRule();
// rule.second = [0, 10, 20, 30, 40, 50]; // 每隔 10 秒执行一次

// let job = schedule.scheduleJob(rule, () => {
//   try {
//     console.log("zhixing");
//     const hh = () => {
//       console.log("hhh");
//     };
//     redisConnectHandle(hh);
//   } catch (error) {
//     console.log(error);
//   }
// });
app.listen(port, () => {
  console.log(`app is running at http://127.0.0.1:${port}/`);
});
