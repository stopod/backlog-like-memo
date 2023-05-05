import { MainTaskDialog, MainTask } from "../components/MainTaskDialog";

// type ChildTask = {
//   id: number;
//   title: string;
//   details: string;
//   author: string;
// };

const mainTask: MainTask = {
  id: 1,
  title: "メインタスクのタイトル",
  details: "メインタスクの詳細",
  author: "stopod",
  childTask: null,
};

export const App = () => {
  return (
    <>
      <MainTaskDialog {...mainTask} />
    </>
  );
};
