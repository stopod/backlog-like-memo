import { MainTask } from "./entity/MainTaskEntity";
import axiosClient from "./axiosClient";

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
