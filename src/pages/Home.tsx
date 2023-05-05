import { MainTaskDialog, MainTask } from "../components/MainTaskDialog";

// type ChildTask = {
//   id: number;
//   title: string;
//   details: string;
//   author: string;
// };

const mainTasks: MainTask[] = [
  {
    id: 1,
    title: "朝ごはんを買う",
    details: "松屋いく",
    author: "stopod",
    childTask: null,
  },
  {
    id: 2,
    title: "昼ご飯を買う",
    details: "吉野家いく",
    author: "stopod",
    childTask: null,
  },
  {
    id: 3,
    title: "夜ご飯を買う",
    details: "すき屋いく",
    author: "stopod",
    childTask: null,
  },
];

export const Home = () => {
  return (
    <>
      {mainTasks.map((mainTask) => (
        <MainTaskDialog {...mainTask} />
      ))}
    </>
  );
};
