const Http = require("./http");
// .env文件需和你起服务的文件在同一目录下
const dotenv = require("dotenv");
dotenv.config();
const dayToken = 'vVEfUA68tfzDjNgADBMVZ6'

const initDayHttpAxios = () => {
    return new Http(dayToken);
};
let dayRobotApi = {
    sendSignMsg: `https://api.day.app/${dayToken}/sign?url=snssdk2606://juejin.cn/user/center/signin?from=main_page`
}


module.exports = {
    initDayHttpAxios,
    dayRobotApi,
};
