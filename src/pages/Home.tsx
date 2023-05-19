import { memo, useEffect, useState } from "react";
import { MainTaskList, Tasks } from "../components/MainTaskList";
import memoApi from "../api/mainTaskApi";
import Button from "@mui/material/Button";

export const Home = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const mainTasks = await memoApi.findAll();
      const currentTasks: Tasks[] = mainTasks.map((task) => ({
        ...task,
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
      }));

      setTasks(currentTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="text" onClick={fetchData}>
        更新
      </Button>
      {tasks.map((task) => (
        <MainTaskList key={task._id} {...task} />
      ))}
    </>
  );
};
