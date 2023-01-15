//app.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

let nodeMail = nodemailer.createTransport({
  service: "qq", //类型qq邮箱
  port: 465, //上文获取的port
  secure: true, //上文获取的secure
  auth: {
    user: "mingo233@qq.com", // 发送方的邮箱，可以选择你自己的qq邮箱
    pass: "jaixkznfbxgsbdbc", // 上文获取的stmp授权码
  },
});

const app = express();
app.use(express.json());
app.use(cors());
const email = "825740725@qq.com";
//发送邮件
const mail = {
  from: `mingo233@qq.com`, // 发件人
  subject: "测试", //邮箱主题
  to: email, //收件人，这里由post请求传递过来
  // 邮件内容，用html格式编写
  html: `
             <p>Mingo提醒：</p>
             <p>今天已完成签到，为防止官方活跃检测，建议点击下面链接进入掘金页面</p>
             <p>https://juejin.cn/</p>
         `,
};
            //  <p>您的验证码是：<strong style="color:orangered;">${code}</strong></p>
nodeMail.sendMail(mail, (err, info) => {
  if (!err) {
    console.log(info);

    // res.json({ msg: "验证码发送成功" });
  } else {
    // res.json({ msg: "验证码发送失败，请稍后重试" });
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("服务开启成功");
});
