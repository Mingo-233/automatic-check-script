const schedule = require("node-schedule");

class Interval {
  constructor({ unit_name, maintain_time, last_alarm }) {
    this.unit_name = unit_name; // 任务名字
    this.maintain_time = maintain_time; // 定时时间
    this.last_alarm = last_alarm || ""; // 上一次定时任务名字
  }

  // 生成新的定时任务
  async create(callback) {
    // 终止之前的定时任务
    if (this.last_alarm !== "") {
      this.delete(this.last_alarm);
    }
    schedule.scheduleJob(
      `${this.unit_name}`,
      `${this.maintain_time}`,
      callback
    );
  }

  // 删除定时任务
  delete() {
    if (schedule.scheduledJobs[this.unit_name]) {
      schedule.scheduledJobs[this.unit_name].cancel();
      return true;
    }
    return false;
  }

  // 找到一个定时任务
  findOne(name) {
    if (schedule.scheduledJobs[name]) {
      return schedule.scheduledJobs[name];
    } else {
      throw new Error("未找到任务名");
    }
  }

  // 查看所有的定时任务
  findAll() {
    return schedule.scheduledJobs;
  }
}

// 定时任务

// let a = new Interval({
//   unit_name: "自动分发任务 0 0 12 * * *",
//   maintain_time: "10 * * * * *",
//   //   last_alarm: "自动分发任务 0 0 12 * * *",
// });
// a.create(async () => {
//   // 写入你自己想在定时任务触发的时候，想要执行的函数
//   console.log("nihao");
// });

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
