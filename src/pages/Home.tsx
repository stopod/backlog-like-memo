import { Header } from "../components/Header";
import { MainTaskDialog, MainTask } from "../components/MainTaskDialog";

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
      <Header />
      {mainTasks.map((mainTask) => (
        <MainTaskDialog {...mainTask} />
      ))}
    </>
  );
};
