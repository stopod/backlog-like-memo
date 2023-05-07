import axiosClient from "./axiosClient";

export type MainTask = {
  title: string;
  author: string;
  details: string;
  createTime: string;
};

const memoApi = {
  create: async (params: MainTask) =>
    await axiosClient.post("/action/insertOne", params),
};

export default memoApi;
