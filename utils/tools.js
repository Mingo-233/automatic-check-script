//解决对象中存在循环引用问题
function circularReference(row) {
  let cache = [];
  let str = JSON.stringify(row, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // 移除
        return;
      } // 收集所有的值
      cache.push(value);
    }
    return value;
  });
  cache = null; // 清空变量，便于垃圾回收机制回收
  return str;
}

module.exports = {
  circularReference,
};
