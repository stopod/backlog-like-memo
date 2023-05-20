export type ChildTask = {
  _id: number;
  title: string;
  details: string;
  author: string;
  status: number;
  parentTaskId: string;
};
