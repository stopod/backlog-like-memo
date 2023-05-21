import axiosClient from "./axiosClient";

export type MainTask = {
  _id: string;
  title: string;
  author: string;
  details: string;
  createTime: string;
};

type Filter = {
  _id: { $oid: string };
};

const document = {
  collection: "MainTask",
  database: "BacklogLikeMemo",
  dataSource: "Cluster0",
};

const memoApi = {
  create: async (param: Omit<MainTask, "_id">) => {
    const currentParam = {
      ...document,
      document: param,
    };
    await axiosClient.post("/insertOne", currentParam);
  },
  findAll: async (): Promise<MainTask[]> =>
    await axiosClient.post("/find", document),
  deleteOne: async (filter: Filter) => {
    const param = {
      ...document,
      filter,
    };

    const res = await axiosClient.post("/deleteOne", param);
  },
};

export default memoApi;
