//app.js
const express = require("express");
const cors = require("cors");
const nodeMail = require("./nodemailer.js");

const app = express();
app.use(express.json());
app.use(cors());
const email = "825740725@qq.com";
const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0"); //生成6位随机验证码
//发送邮件
const mail = {
  from: `mingo233@qq.com`, // 发件人
  subject: "验证码", //邮箱主题
  to: email, //收件人，这里由post请求传递过来
  // 邮件内容，用html格式编写
  html: `
             <p>您好！</p>
             <p>您的验证码是：<strong style="color:orangered;">${code}</strong></p>
             <p>如果不是您本人操作，请无视此邮件</p>
         `,
};
nodeMail.sendMail(mail, (err, info) => {
  if (!err) {
    console.log(info);

    // res.json({ msg: "验证码发送成功" });
  } else {
    // res.json({ msg: "验证码发送失败，请稍后重试" });
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("服务开启成功");
});
