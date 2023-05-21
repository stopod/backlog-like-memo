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
  create: async (param: Omit<ChildTask, "_id">) => {
    const currentParam = {
      ...document,
      document: param,
    };
    console.log(currentParam);
    await axiosClient.post("/insertOne", currentParam);
  },
  findAll: async (): Promise<ChildTask[]> =>
    await axiosClient.post("/find", document),
};

export default memoApi;
