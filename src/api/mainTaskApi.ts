import axiosClient from "./axiosClient";

export type MainTask = {
  title: string;
  author: string;
  details: string;
  createTime: string;
};

const document = {
  collection: "MainTask",
  database: "BacklogLikeMemo",
  dataSource: "Cluster0",
};

const memoApi = {
  create: async (params: MainTask) =>
    await axiosClient.post("/insertOne", params),
  findAll: async () =>
    await axiosClient.post("/find", JSON.stringify(document)),
};

export default memoApi;
