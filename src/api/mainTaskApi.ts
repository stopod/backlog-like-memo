import axiosClient from "./axiosClient";

export type MainTask = {
  _id: string;
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
  create: async (param: any) => await axiosClient.post("/insertOne", param),
  findAll: async (): Promise<MainTask[]> =>
    await axiosClient.post("/find", JSON.stringify(document)),
};

export default memoApi;
