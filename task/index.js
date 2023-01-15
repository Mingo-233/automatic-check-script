// 任务方法 （需要调用组合api共同完成，存在接口先后顺序）

const { initHttpAxios, juejinApi } = require("../api/juejinApi");
const fsBotApp = require("../utils/fsRobot");
initHttpAxios();
const {
  postReadTask,
  getBookSectionOfVite,
  getBugListGame,
  postBugCollectGame,
  checkTodayStatus
} = juejinApi;
const taskMethods = {
  vipReadTask() {
    getBookSectionOfVite()
      .then((res) => {
        let sectionsArr = res.data.sections;
        let sectionsIds = [];
        // vip5 每天阅读任务完成数量上限为10
        for (let i = 0; i < 10; i++) {
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
  bugFixGame() {
    getBugListGame()
      .then((res) => {
        let list = res.data;
        list.forEach((item) => {
          let params = {
            bug_time: item.bug_time,
            bug_type: item.bug_type,
          };
          postBugCollectGame(params);
        });
      })
      .catch((err) => {
        throw err;
      });
  },
  /**
   * 检查是否签到，未签到发送消息通知
   */
  checkSign() {
    checkTodayStatus()
      .then((res) => {
        const { data = {} } = res
        if (!data.check_in_done) {
          fsBotApp.sendSignTipMsg()
        }
      })
      .catch((err) => {
        throw err;
      });

  }
};

module.exports = taskMethods;
