import axios from "axios";

const getToken = () => localStorage.getItem("access_token");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_MONGODB_BASE_URL,
});

axiosClient.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    // 取得はdocumentsに入ってくる。。。
    if (response.data?.documents) {
      return response.data?.documents;
    } else {
      return response.data;
    }
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
