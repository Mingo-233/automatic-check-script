

function checkTime() {
    let now = new Date()
    const timestamp = Date.now();
    console.log('timestamp', timestamp)
    console.log(parseTimestamp(timestamp));
}
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

module.exports = {
    getCurrentDateTime
}
// 示例调用
// const currentTimeUTC = getCurrentDateTime();
// const currentTimeNY = getCurrentDateTime('America/New_York');
// const currentTimeCN = getCurrentDateTime('Asia/Shanghai');

// console.log('当前UTC时间:', currentTimeUTC);
// console.log('当前纽约时间:', currentTimeNY);
// console.log('当前北京时间:', currentTimeCN);
