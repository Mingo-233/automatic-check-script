redis-server
brew services start redis
brew services info redis
brew services stop redis


get key

set key

del key

查看所有的key
keys *


打开Redis 客户端
redis-cli

查看是否密码配置项
CONFIG get requirepass

CONFIG set requirepass "runoob"


AUTH password

