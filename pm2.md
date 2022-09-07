进入bin目录启动：pm2 start www / pm2 start app.js
pm2 start app.js --name="fx67ll" 启动并命名为fx67ll，没有命名的话后续可以用id替代name
pm2 start app.js --watch 当文件变化时自动重启应用
pm2 start script.sh 启动bash脚本
pm2 list 查看所有启动的应用列表
pm2 monit 显示每个应用程序的CPU和内存占用情况
pm2 show [app-id/app-name] 显示指定应用程序的所有信息
pm2 log 显示应用程序的日志信息
pm2 log [app-id/app-name] 显示指定应用程序的日志信息
pm2 flush 清空所有日志文件
pm2 stop all 停止所有应用程序
pm2 stop [app-id/app-name] 停止指定应用程序
pm2 restart all 重启所有应用程序
pm2 restart [app-id/app-name] 重启指定应用程序
pm2 delete all 关闭并删除所有应用程序
pm2 delete [app-id/app-name] 删除指定的应用程序
pm2 reset [app-id/app-name] 重置重启数量
pm2 startup 创建开机自启动命令
pm2 save 保存当前应用列表
pm2 resurrect 重新加载保存的应用列表
pm2 update 保存进程，杀死并重启进程，一般用于更新pm2版本
pm2 ecosystem 生成一个示例json配置文件
