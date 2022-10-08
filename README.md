# automatic-check-script

## 掘金自动签到脚本

* 包括且不限
* -  自动签到、自动每日免费抽奖（签到成功后会送一次）、自动集幸运卡、自动收集bug游戏
* -  vip任务 每日阅读获得珊瑚 （不同等级vip存在不同的每日上限获取数量）【该功能需要开通掘金vip，且提供购买的掘金小册id】
* 自动日志记录、执行失败邮件通知
* 设定定时任务node-schedule，目前跑在私人服务器上 
* redis支持 )
* - 如果接入redis 需要在redis目录下创建.env 文件配置环境变量 （数据库连接密码 PASSWORD字段）
* - 如果重新设置过密码 要重启redis服务才能生效
* 支持多人账户管理 （如有需要可增加账号，联系我～） 


## 使用
* pnpm install 
* node app.js / nodemon /pm2 都可以
