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
  // const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, "0"); //生成6位随机验证码
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

module.exports = emailSend;
