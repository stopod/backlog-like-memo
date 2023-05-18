import { memo, useEffect, useLayoutEffect, useState } from "react";
import { MainTaskList, Tasks } from "../components/MainTaskList";
import memoApi, { MainTask } from "../api/mainTaskApi";
import { ChildTaskList } from "../components/ChildTaskList";

const mainTasksMock = [
  {
    _id: "1",
    title: "朝ごはんを買う",
    details: "松屋いく",
    author: "stopod",
    createTime: "",
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
    _id: "2",
    title: "昼ご飯を買う",
    details: "吉野家いく",
    author: "stopod",
    createTime: "",
    childTasks: null,
  },
  {
    _id: "3",
    title: "夜ご飯を買う",
    details: "すき屋いく",
    author: "stopod",
    createTime: "",
    childTasks: null,
  },
];

export const Home = () => {
  const [mainTasks, setMainTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainTasks = await memoApi.findAll();
        const mainTasksAddChild: Tasks[] = mainTasks.map((mainTask) => {
          return {
            _id: mainTask._id,
            title: mainTask.title,
            details: mainTask.details,
            author: mainTask.author,
            createTime: mainTask.createTime,
            childTasks: [
              {
                id: 11,
                title: "sample child task",
                details: "sample sample sample",
                status: 0,
                author: "stopod",
              },
              {
                id: 12,
                title: "sample child task",
                details: "sample sample sample",
                status: 0,
                author: "stopod",
              },
              {
                id: 13,
                title: "sample child task",
                details: "sample sample sample",
                status: 0,
                author: "stopod",
              },
            ],
          };
        });

        setMainTasks(mainTasksAddChild);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {mainTasks.map((mainTask) => (
        <MainTaskList key={mainTask._id} {...mainTask} />
      ))}
    </>
  );
};
