// 任务方法 （需要调用组合api共同完成，存在接口先后顺序）

const { postReadTask, getBookSectionOfVite } = require("../api/juejinApi");

const taskMethods = {
  vipReadTask() {
    getBookSectionOfVite()
      .then((res) => {
        let sectionsArr = res.data.sections;
        let sectionsIds = [];
        // 每天阅读任务完成数量上限为5
        for (let i = 0; i < 5; i++) {
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
