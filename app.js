const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const app = new express();
const port = 3000;
const { scheduleTask } = require("./utils/schedule");
const emailSend = require("./utils/emailSend");
// const redisConnectHandle = require("./redis/app");
const { initHttpAxios, juejinApi } = require("./api/juejinApi");
const { getBookList, postSign, luckDraw, getHappyCardList, touchHappy } =
  juejinApi;
const { sleep } = require("./utils/tools");

const { vipReadTask, bugFixGame, checkSign } = require("./task/index");
const AccountList = [{
  name: 'mingo',
  vip: false,
  token: process.env.token
}]
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
    /**
     * description: bug 收集游戏
     * TODO: 已被官方禁用
     */
    // bugFixGame();
    /**
     * description: vip任务
     * TODO: 已被官方禁用
     */
    // isVip && vipReadTask();
    await sleep(30000);
  } catch (error) {
    console.log(error);
    emailSend(error.message);
  }
};
// 主进程任务
function mainTask() {
  try {
    const doTask = async (accountList) => {
      for (let i = 0; i < 1; i++) {
        initHttpAxios(accountList[i].token);
        await doTaskHandle(accountList[i].vip);
      }
    };
    doTask(AccountList)
  } catch (error) {
    console.log(error);
    emailSend(error);
  }
}
// 签到提醒任务
function checkAlertTask() {
  try {
    const doTask = async (accountList) => {
      for (let i = 0; i < 1; i++) {
        initHttpAxios(accountList[i].token);
        await doTaskSign();
      }
    };
    doTask(AccountList)
  } catch (error) {
    console.log(error);
    emailSend(error);
  }
}


const doTaskSign = async () => {
  try {
    checkSign()
    await sleep(30000);
  } catch (error) {
    console.log(error);
    emailSend(error.message);
  }
};


scheduleTask(mainTask, 10, 0, 10)
scheduleTask(checkAlertTask, 22, 0, 20)

app.listen(port, () => {
  console.log(`app is running at http://127.0.0.1:${port}/`);
});
