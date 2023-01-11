const express = require("express");
const fs = require("fs");
const app = new express();
const port = 3000;
const Interval = require("./utils/node-schedule");
const schedule = require("node-schedule");
const emailSend = require("./utils/emailSend");
const redisConnectHandle = require("./redis/app");
const { initHttpAxios, juejinApi } = require("./api/juejinApi");
const { getBookList, postSign, luckDraw, getHappyCardList, touchHappy } =
  juejinApi;
const { sleep } = require("./utils/tools");

const { vipReadTask, bugFixGame } = require("./task/index");
const doTaskHandle = async (isVip) => {
  try {
    // 签到
    // const res = await postSign();
    // if (res.err_no && res.err_no !== 0 && res.err_no !== 15001) {
    //   throw Error(JSON.stringify(res));
    // }
    // 抽奖
    // luckDraw();
    const { data } = await getHappyCardList();
    // 抽幸运卡
    touchHappy(data.lotteries[0].history_id);
    // bug 收集游戏
    bugFixGame();
    isVip && vipReadTask();
    await sleep(30000);
  } catch (error) {
    console.log(error);
    emailSend(error.message);
  }
};

let mainSchedule = new Interval({
  unit_name: "科教兴国定时任务",
  maintain_time: "10 3 10 * * *", //每天x点执行
});
mainSchedule.create(async () => {
  try {
    const doTask = async (accountList) => {
      // accountList.length;
      for (let i = 0; i < 1; i++) {
        initHttpAxios(accountList[i].token);
        await doTaskHandle(accountList[i].vip);
      }
    };
    redisConnectHandle(doTask);
  } catch (error) {
    console.log(error);
    emailSend(error);
  }
});

// 启动临时任务
//  let rule = new schedule.RecurrenceRule();
//  rule.second = [0, 10, 20, 30, 40, 50]; // 每隔 10 秒执行一次

//  let job = schedule.scheduleJob(rule, () => {
//    try {
//      const doTask = async (accountList) => {
//        console.log(accountList[0].name);
//        for (let i = 0; i < accountList.length; i++) {
//          initHttpAxios(accountList[i].token);
//          await doTaskHandle(accountList[i].vip);
//        }
//      };
//      redisConnectHandle(doTask);
//    } catch (error) {
//      console.log(error);
//      emailSend(error);
//    }
//  });
app.listen(port, () => {
  console.log(`app is running at http://127.0.0.1:${port}/`);
});
