const express = require("express");
const fs = require("fs");
const app = new express();
const port = 3000;
const Interval = require("./utils/node-schedule");
const schedule = require("node-schedule");
const emailSend = require("./utils/emailSend");

const {
  getBookList,
  postSign,
  luckDraw,
  getHappyCardList,
  touchHappy,
} = require("./api/juejinApi");

let a = new Interval({
  unit_name: "科教兴国定时任务",
  maintain_time: "10 1 8 * * *",
  //   last_alarm: "自动分发任务 0 0 12 * * *",
});
a.create(async () => {
  try {
    const res = await postSign();
    if (res.err_no && res.err_no !== 0) {
      throw Error(JSON.stringify(res));
    }
    luckDraw();
    const { data } = await getHappyCardList();
    touchHappy(data.lotteries[0].history_id);
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
//     postSign()
//       .then((res) => {
//         console.log(res);
//         if (res.err_no && res.err_no !== 0) {
//           throw Error(JSON.stringify(res));
//         }
//         // luckDraw();
//         // touchHappy();
//       })
//       .catch((err) => {
//         console.log(err);
//         emailSend(err.message);
//       });
//   } catch (error) {
//     console.log(error);
//     emailSend(error.message);
//   }
// });
app.listen(port, () => {
  console.log(`app is running at http://127.0.0.1:${port}/`);
});
