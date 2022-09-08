## mac 系统安装redis
brew install redis

redis-server
brew services start redis
brew services info redis
brew services stop redis

## 基本指令
redis官网  https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/
菜鸟教程  https://www.runoob.com/redis/redis-tutorial.html

打开Redis 客户端
redis-cli
查看是否密码配置项
CONFIG get requirepass

CONFIG set requirepass "runoob"

登陆
AUTH password


get key
set key
del key

查看所有的key
keys *


if value is of type string -> GET <key>
if value is of type hash -> HGETALL <key>
if value is of type lists -> lrange <key> <start> <end>
if value is of type sets -> smembers <key>
if value is of type sorted sets -> ZRANGEBYSCORE <key> <min> <max>
if value is of type stream -> xread count <count> streams <key> <ID>. 
https://redis.io/commands/xread