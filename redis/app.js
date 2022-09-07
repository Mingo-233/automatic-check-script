const redis = require("redis"); // 引入 redis

const redisClient = redis.createClient(6379, "127.0.0.1", {
  auth_pass: "runoob",
}); // 创建客户端

// 监听错误信息
redisClient.on("err", (err) => {
  console.log("redis client error: ", err);
});

redisClient.on("ready", function (err) {
  console.log("ready");
});
// 创建连接，是个 promise
redisClient.connect(6379, "127.0.0.1").then(async () => {
  const result = await redisClient.get("name");
  console.log(result);
});
// redisClient.connect(6379, "127.0.0.1").then(() => {
//   redisClient.set("name", "zhangsan").then((val) => {
//     console.log(val);
//   });
// });

// redisClient.quit();
