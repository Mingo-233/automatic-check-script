// 例子：每天的下午3点执行任务
function myDailyTask() {
    console.log("每天下午3点执行的任务！");
    // checkTime()

}
function checkTime() {
    let now = new Date()
    const timestamp = Date.now();
    console.log('timestamp', timestamp)
}
// scheduleTask(myDailyTask, 15, 50, 0);
function getCurrentDateTime(timezone = 'UTC') {
    const options = { timeZone: timezone };
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 使用24小时制
        ...options
    });

    const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
        ,
        { value: hour },
        ,
        { value: minute },
        ,
        { value: second }
    ] = formatter.formatToParts(now);
    const txt_time = `${year}-${month}-${day} ${hour}:${minute}:${second} ${timezone}`;

    console.log('return time', txt_time);
    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
        timezone
    }
}

// 示例调用
// const currentTimeUTC = getCurrentDateTime();
// const currentTimeNY = getCurrentDateTime('America/New_York');
// const currentTimeCN = getCurrentDateTime('Asia/Shanghai');

// console.log('当前UTC时间:', currentTimeUTC);
// console.log('当前纽约时间:', currentTimeNY);
// console.log('当前北京时间:', currentTimeCN);


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
function myDailyTask() {
    console.log("执行任务！");

}
scheduleTask(myDailyTask, 17, 12, 0)
