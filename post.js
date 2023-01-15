// const { getBookListApi, postSignApi } = require("./api/juejinApiOld");
const { initHttpAxios, juejinApi } = require("./api/juejinApi");
initHttpAxios();
const {
  getBookList,
  postSign,
  touchHappy,
  getHappyCardList,
  postReadTask,
  getBookSectionOfVite,
  getBugListGame,
  postBugCollectGame,
  checkTodayStatus
} = juejinApi;
// https://www.baoxiaohe.com/api/design/search/popular
const { bugFixGame } = require("./task/index");
// bugFixGame();
checkTodayStatus()
  .then((res) => {
    console.log(res);
    console.log(res.data);

  })
  .catch((err) => {
    console.log(err);
  });

// postReadTask();

// getBookSectionOfVite().then((res) => {
//   let sectionsArr = res.data.sections;
//   let sectionsIds = [];
//   // 每天阅读任务完成数量上限为5
//   for (let i = 0; i < 5; i++) {
//     sectionsIds.push(sectionsArr[i].section_id);
//   }
//   console.log(sectionsIds);
//   sectionsIds.forEach((id) => {
//     postReadTask(id);
//   });
// });
