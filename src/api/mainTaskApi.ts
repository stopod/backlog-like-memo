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
    await axiosClient.post("/find", document),
  deleteOne: async (filter: any) => {
    const param = {
      ...document,
      filter,
    };

    const res = await axiosClient.post("/deleteOne", param);
  },
};

export default memoApi;
