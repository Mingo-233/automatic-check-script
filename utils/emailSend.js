const nodemailer = require("nodemailer");
const { getLogger } = require("nodemailer/lib/shared");

let nodeMail = nodemailer.createTransport({
  service: "qq", //类型qq邮箱
  port: 465, //上文获取的port
  secure: true, //上文获取的secure
  auth: {
    user: "mingo233@qq.com", // 发送方的邮箱，可以选择你自己的qq邮箱
    pass: "jaixkznfbxgsbdbc", // 上文获取的stmp授权码
  },
});

// node_modules/nodemailer/lib/well-known/services.json可以查看相关的配置，
// 比如这里是qq邮箱，port为465，secure为true。

const emailSend = (msg, url) => {
  console.log("邮件准备开始发送");
  console.log(msg);

  const email = "825740725@qq.com";
  //发送邮件
  const mail = {
    from: `mingo233@qq.com`, // 发件人
    subject: "科教兴国脚本错误日志", //邮箱主题
    to: email, //收件人
    // 邮件内容，用html格式编写
    html: `
             <p style="color:red">Error message</p> 
             <p>${msg}</p>

         `,
  };
  nodeMail.sendMail(mail, (err, info) => {
    if (!err) {
      console.log("验证发送成功");
      console.log(info);
    } else {
      // res.json({ msg: "验证码发送失败，请稍后重试" });
      console.log(err);
    }
  });
};

const emailTipSend = (config, url) => {
  
  const {email= "825740725@qq.com",subject } = config;
  //发送邮件
  const mail = {
    from: `mingo233@qq.com`, // 发件人
    subject: "juejin活跃检测提醒", //邮箱主题
    to: email, //收件人
    // 邮件内容，用html格式编写
    html: `
           <p>Mingo提醒：</p>
             <p>今天已完成签到，为防止官方活跃检测，建议点击下面链接进入掘金页面</p>
             <p>https://juejin.cn/</p>
         `,
  };
  nodeMail.sendMail(mail, (err, info) => {
    if (!err) {
      console.log("验证发送成功");
      console.log(info);
    } else {
      console.log(err);
    }
  });
};
module.exports = emailSend;
