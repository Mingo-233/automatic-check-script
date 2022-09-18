const redis = require("redis"); // 引入 redis
const dotenv = require("dotenv");
dotenv.config();
const redisClient = redis.createClient(6379, "127.0.0.1", {
  auth_pass: process.env.PASSWORD,
}); // 创建客户端

// 监听错误信息
redisClient.on("err", (err) => {
  console.log("redis client error: ", err);
});

redisClient.on("ready", function (err) {
  console.log("ready");
});
// 创建连接，是个 promise
// redisClient
//   .connect(6379, "127.0.0.1", {
//     auth_pass: process.env.PASSWORD,
//   })
//   .then(async () => {
//     const accountList = await getAccountList();
//     console.log(accountList);
//     // addAccountList('{"name":"mingo","token":"sadkjh"}');
//   });
const redisConnectHandle = async (callBack) => {
  await redisClient.connect(6379, "127.0.0.1", {
    auth_pass: process.env.PASSWORD,
  });
  const accountList = await getAccountList();
  callBack && callBack(accountList);
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
  const result = await redisClient.lRange("jjAccount", 0, 10);
  let arrList = [];
  for (const key of result) {
    arrList.push(JSON.parse(key));
    //  '{"name":"mingo","token":"sadkjh"}';
  }
  return arrList;
};
// redisClient.connect(6379, "127.0.0.1").then(() => {
//   redisClient.set("name", "zhangsan").then((val) => {
//     console.log(val);
//   });
// });

// redisClient.quit();
// redisConnectHandle();
module.exports = redisConnectHandle;
