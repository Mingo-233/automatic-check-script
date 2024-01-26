const dotenv = require("dotenv");
dotenv.config();

const { initHttpAxios, juejinApi } = require("./api/juejinApi");
initHttpAxios(process.env.token);
const {
    checkTodayStatus
} = juejinApi;


// console.log('token', process.env.token);

checkTodayStatus()