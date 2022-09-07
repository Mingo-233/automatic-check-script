const winston = require("winston");
const path = require("path");
require("winston-daily-rotate-file");

// doc https://juejin.cn/post/6865926810061045774
// https://github.com/winstonjs/winston-daily-rotate-file

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: "juejin" }),
    winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
    winston.format.prettyPrint()
  ),
  transports: [
    // new winston.transports.Console(),
    // new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.DailyRotateFile({
      filename: path.join(__dirname, "..", "logs", `%DATE%.log`),
      datePattern: "YYYY-MM-DD",
      utc: true,
    }),
  ],
});
// logger.info({ name: "aa", age: 99 });

module.exports = logger;
