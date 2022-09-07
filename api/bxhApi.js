const axios = require("axios");
const inputHandler = require("../ioTxt");
axios.interceptors.request.use(
  (config) => {
    const aheaders = {
      Authentication:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblRpbWUiOjE2NjE0MjU3MDQyOTcsInVzZXJfaWQiOjQxOTM5OSwidHlwZSI6InVzZXIiLCJtYWluVWlkIjoiNDA1b3BlMjBreTE0N3lnZCIsImlhdCI6MTY2MTQyNTcwNCwiZXhwIjoxNjYyMDMwNTA0fQ.jsDtx2FE96j9YLuDcwUlwRdUsO3CevNGK4Dg-w5tifM",
    };
    // @ts-ignore
    Object.assign(config.headers, aheaders);
    return config;
  },
  (error) => {
    return error;
  }
);
const getUserInfoApi = (url) => {
  axios
    .get(url)
    .then((response) => {
      // console.log(response);

      console.log(response.data);
      inputHandler(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const postCollectionsApi = (url) => {
  axios
    .post(url, {
      type: 8,
      typeId: 775,
    })
    .then((response) => {
      // console.log(response);

      console.log(response.data);
      inputHandler(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getUserInfoApi,
  postCollectionsApi,
};
