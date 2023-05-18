import axios from "axios";

const getToken = () => localStorage.getItem("access_token");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_MONGODB_BASE_URL,
});

axiosClient.interceptors.request.use((config: any) => {
  console.log(config);
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
    return response.data.documents;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
