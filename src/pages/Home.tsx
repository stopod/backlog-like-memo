import { MainTaskList, MainTask } from "../components/MainTaskList";

const mainTasks: MainTask[] = [
  {
    id: 1,
    title: "朝ごはんを買う",
    details: "松屋いく",
    author: "stopod",
    childTasks: [
      {
        id: 11,
        title: "店舗に行く",
        details: "駅のところの",
        status: 0,
        author: "stopod",
      },
      {
        id: 12,
        title: "食券を買う",
        details: "味噌汁抜き",
        status: 0,
        author: "stopod",
      },
      {
        id: 13,
        title: "店員に渡す",
        details: "よろしくね",
        status: 0,
        author: "stopod",
      },
    ],
  },
  {
    id: 2,
    title: "昼ご飯を買う",
    details: "吉野家いく",
    author: "stopod",
    childTasks: null,
  },
  {
    id: 3,
    title: "夜ご飯を買う",
    details: "すき屋いく",
    author: "stopod",
    childTasks: null,
  },
];

export const Home = () => {
  return (
    <>
      {mainTasks.map((mainTask, index) => (
        <MainTaskList key={index} {...mainTask} />
      ))}
    </>
  );
};
