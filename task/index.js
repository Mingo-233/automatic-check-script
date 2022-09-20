// 任务方法 （需要调用组合api共同完成，存在接口先后顺序）

const { initHttpAxios, juejinApi } = require("../api/juejinApi");
initHttpAxios();
const { postReadTask, getBookSectionOfVite } = juejinApi;
const taskMethods = {
  vipReadTask() {
    getBookSectionOfVite()
      .then((res) => {
        let sectionsArr = res.data.sections;
        let sectionsIds = [];
        // vip3 每天阅读任务完成数量上限为7
        for (let i = 0; i < 7; i++) {
          sectionsIds.push(sectionsArr[i].section_id);
        }
        sectionsIds.forEach((id) => {
          postReadTask(id);
        });
      })
      .catch((err) => {
        throw err;
      });
  },
};

module.exports = taskMethods;
