// day机器人通知
const { dayRobotApi, initDayHttpAxios } = require('../api/dayAPi')

class dayBot {
    token
    http
    constructor(token) {
        this.token = token
        this.http = initDayHttpAxios(token)
    }
    sendSignTipMsg() {
        return this.http.get(dayRobotApi.sendSignMsg)
    }

}
const fsBotApp = new dayBot()

module.exports = fsBotApp

// 调试
// let fsBot = new FsBot()
// fsBotApp.sendSignTipMsg().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log('err', err);
// })