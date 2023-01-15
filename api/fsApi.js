const Http = require("./http");
// .env文件需和你起服务的文件在同一目录下
const dotenv = require("dotenv");
dotenv.config();

const initFsHttpAxios = (token) => {
    if (!token) {
        token = process.env.fsToken;
    }
    return new Http(token);
};
let fsRobotApi = {
    sendMsg: 'https://open.feishu.cn/open-apis/bot/v2/hook/d52a1d14-de69-435c-bdbf-c409ba3a1e2c'
}


module.exports = {
    initFsHttpAxios,
    fsRobotApi,
};
