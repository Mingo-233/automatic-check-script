const { getUserInfoApi, postCollectionsApi } = require("./api/bxhApi.js");
// const { getBookListApi, postSignApi } = require("./api/juejinApiOld");
const {
  getBookList,
  postSign,
  touchHappy,
  getHappyCardList,
} = require("./api/juejinApi");

// https://www.baoxiaohe.com/api/design/search/popular

let url1 = "https://r4.baoxiaohe.fun/api/design/users/check";
// getUserInfoApi(url1);
let url2 = "https://r4.baoxiaohe.fun/api/design/collections";

// postCollectionsApi(url2);

getHappyCardList()
  .then((res) => {
    const { data } = res;
    console.log(res);

    touchHappy(data.lotteries[0].history_id).then((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// touchHappy()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
