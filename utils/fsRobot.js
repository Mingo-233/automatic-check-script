// 飞书机器人通知
const { fsRobotApi, initFsHttpAxios } = require('../api/fsApi')

class FsBot {
    token
    http
    constructor(token) {
        this.token = token
        this.http = initFsHttpAxios(token)
    }
    sendSignTipMsg() {
        const params =
        {
            "msg_type": "interactive",
            "card": {
                "elements": [
                    {
                        "tag": "div",
                        "text": {
                            "content": "**掘金**:检测到今天还未签到 <at id=ou_5778fad826f40910d487ab4c129e1f70></at> ",
                            "tag": "lark_md"
                        }
                    },
                    {
                        "actions": [
                            {
                                "tag": "button",
                                "text": {
                                    "content": "点进签到 :玫瑰:",
                                    "tag": "lark_md"
                                },
                                "url": "snssdk2606://juejin.cn/user/center/signin?from=main_page",
                                "type": "default",
                                "value": {}
                            }
                        ],
                        "tag": "action"
                    }
                ],
                "header": {
                    "title": {
                        "content": "每日提醒",
                        "tag": "plain_text"
                    }
                }
            }
        }
        return this.http.post(fsRobotApi.sendMsg, params)
    }

}
const fsBotApp = new FsBot()

module.exports = fsBotApp

// 调试
// let fsBot = new FsBot()
// fsBot.sendSignTipMsg().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })