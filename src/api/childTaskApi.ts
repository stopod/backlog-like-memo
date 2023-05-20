import axiosClient from "./axiosClient";

export type ChildTask = {
  _id: number;
  title: string;
  details: string;
  author: string;
  status: number;
  parentTaskId: string;
};

const document = {
  collection: "ChildTask",
  database: "BacklogLikeMemo",
  dataSource: "Cluster0",
};

const memoApi = {
  create: async (param: any) => await axiosClient.post("/insertOne", param),
  findAll: async (): Promise<ChildTask[]> =>
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
