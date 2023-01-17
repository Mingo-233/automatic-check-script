const schedule = require("node-schedule");

class Interval {
  constructor() {
  }
  // 生成新的定时任务
  create(unit_name, maintain_time, callback) {
    let isExist = this.findOne(unit_name)
    if (isExist) {
      // 若已存在该任务，则先删除
      this.delete(unit_name)
    }
    schedule.scheduleJob(
      unit_name,
      maintain_time,
      callback
    );
  }
  // 删除定时任务
  delete(unit_name) {
    if (schedule.scheduledJobs[unit_name]) {
      schedule.scheduledJobs[unit_name].cancel();
      return true;
    }
    return false;
  }
  // 找到一个定时任务
  findOne(name) {
    if (schedule.scheduledJobs[name]) {
      return schedule.scheduledJobs[name];
    } else {
      // throw new Error("未找到任务名");
      return false
    }
  }
  // 查看所有的定时任务
  findAll() {
    return schedule.scheduledJobs;
  }
}

// 定时任务

// let scheduleApp = new Interval();
// scheduleApp.create(
//   "自动分发任务 0 0 12 * * *",
//   "10 * * * * *",
//   () => {
//     // 写入你自己想在定时任务触发的时候，想要执行的函数
//     console.log("nihao")
//   });
// scheduleApp.create(
//   "自动分发任务 0 0 13 * * *",
//   "10 * * * * *",
//   () => {
//     // 写入你自己想在定时任务触发的时候，想要执行的函数
//     console.log("nihao")
//   });

// console.log(scheduleApp.findAll());
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

// 每分钟的第30秒触发： '30 * * * * *'

// 每小时的1分30秒触发 ：'30 1 * * * *'

// 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

// 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

// 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

// 每周1的1点1分30秒触发 ：'30 1 1 * * 1'

module.exports = Interval;
