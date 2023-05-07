import axios from "axios";

const BASE_URL =
  "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ncbvy/endpoint/data/v1";

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use((config: any) => {
  console.log(config);
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      "api-key":
        "QVC1RNf0vbXc7jPPCVTqjqkvrO4Nk7GTHBUPRQwWOVdyBPdpq50SpSQgg4QuGtNP",
    },
    body: {
      collection: "MainTask",
      database: "BacklogLikeMemo",
      dataSource: "Cluster0",
    },
  };
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (err) => {
//     throw err.response;
//   }
// );

export default axiosClient;
