const redis = require("redis"); // 引入 redis
const dotenv = require("dotenv");
dotenv.config();
const redisClient = redis.createClient(6379, "127.0.0.1"); // 创建客户端
// 监听错误信息
redisClient.on("err", (err) => {
  console.log("redis client error: ", err);
});

redisClient.on("ready", function (err) {
  console.log("ready");
});

const isRequiredPassword = process.env.authPass !== "YES";
const redisConnectHandle = async (callBack) => {
  try {
    const option = {};
    if (isRequiredPassword) {
      option.auth_pass = process.env.PASSWORD;
    }
    if (!redisClient.isOpen) {
      await redisClient.connect(6379, "127.0.0.1", option);
    }
    const accountList = await getAccountList();
    callBack && callBack(accountList);
  } catch (error) {
    throw new Error(error);
  }
};

const addAccountList = async (data) => {
  redisClient
    .rPush("jjAccountTest", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getAccountList = async () => {
  try {
    const result = await redisClient.lRange("jjAccount", 0, 10);
    let arrList = [];
    for (const key of result) {
      arrList.push(JSON.parse(key));
      //  '{"name":"mingo","token":"sadkjh"}';
    }
    return arrList;
  } catch (error) {
    throw new Error(error);
  }
};

// redisClient.quit();
//redisConnectHandle();
module.exports = redisConnectHandle;
