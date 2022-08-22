import Axios from "axios";

const request = Axios.create({
  baseURL: "http://https://www.dcard.tw/",
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
