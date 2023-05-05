import { MainTaskDialog, MainTask } from "../components/MainTaskDialog";

// type ChildTask = {
//   id: number;
//   title: string;
//   details: string;
//   author: string;
// };

const mainTask: MainTask = {
  id: 1,
  title: "サンプルタイトル",
  details: "サンプルサンプルサンプルサンプルサンプル",
  author: "stopod",
  childTask: null,
};

const MainTaskBox = (props: MainTask) => {
  return (
    <>
      <p>{props.id}</p>
      <p>{props.author}</p>
      <p>{props.title}</p>
      <p>{props.details}</p>
    </>
  );
};

export const App = () => {
  return (
    <>
      <MainTaskDialog {...mainTask} />
    </>
  );
};
