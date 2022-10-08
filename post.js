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
} = juejinApi;
// https://www.baoxiaohe.com/api/design/search/popular
const { bugFixGame } = require("./task/index");
bugFixGame();
// getHappyCardList()
//   .then((res) => {
//     const { data } = res;
//     console.log(res);

//     touchHappy(data.lotteries[0].history_id).then((res) => {
//       console.log(res);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
