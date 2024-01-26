const { getCurrentDateTime } = require("./time");

function scheduleTask(callback, hour, minute, second) {
    const currentTimeCN = getCurrentDateTime('Asia/Shanghai');
    const currentTimes = currentTimeCN.hour * 60 * 60 * 1000 + currentTimeCN.minute * 60 * 1000 + currentTimeCN.second * 1000
    const ruleTimes = hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000
    let delay = ruleTimes - currentTimes;
    console.log('delay', delay, currentTimeCN.month, currentTimeCN.day, currentTimeCN.hour, currentTimeCN.minute);
    if (delay < 0) {
        // 如果目标时间已经过去，就将其设为明天同一时刻
        delay += 24 * 60 * 60 * 1000; // 一天的毫秒数
    }

    setTimeout(function () {
        callback();
        // 在任务完成后，递归调用以安排下一天的任务
        setTimeout(() => {
            scheduleTask(callback, hour, minute, second);
            // 延迟五秒
        }, 5000);
    }, delay);
}
// function myDailyTask() {
//     console.log("执行任务！");

// }
// scheduleTask(myDailyTask, 17, 2, 0)
module.exports = {
    scheduleTask
}