const fs = require("fs");

const path = require("path");

const isExists = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      // if (err) console.log(`${file} ${err ? "does not exist" : "exists"}`);s
      if (!err) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
const getLogIndex = (name) => {
  let result = name.match(/[0-9]/);
  if (result) {
    return result[0];
  } else {
    return null;
  }
};

const inputHandle = (content) => {
  // const content = fs.readFileSync("./src/template.jsx");
  let fileArrs = fs.readdirSync(path.resolve(__dirname, `log`));
  let n = getLogIndex(fileArrs[fileArrs.length - 1]);
  if (!n) {
    fs.rmdirSync("./log", { recursive: true, force: true });
    fs.mkdirSync("./log");
    n = 1;
  } else {
    n = Number(n) + 1;
  }

  let fileName = `log-${n}.json`;
  const filePath = path.resolve(__dirname, `log/${fileName}`);
  // const filePath2 = path.resolve(__dirname, `log/log.txt`);
  console.log(filePath);
  console.log("日志信息已记录");
  fs.writeFileSync(filePath, content);
};

module.exports = inputHandle;
