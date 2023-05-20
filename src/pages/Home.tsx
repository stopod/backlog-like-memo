import { memo, useEffect, useState } from "react";
import { MainTaskList } from "../components/MainTaskList";
import maintTaskApi from "../api/mainTaskApi";
import childTaskApi from "../api/childTaskApi";
import Button from "@mui/material/Button";
import { ChildTask } from "../api/entity/ChildTaskEntity";

export type Tasks = {
  _id: string;
  title: string;
  details: string;
  author: string;
  createTime: string;
  childTasks: ChildTask[] | null | undefined;
};

export const Home = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const mainTasks = await maintTaskApi.findAll();
      const childTasks = await childTaskApi.findAll();
      const currentTasks: Tasks[] = mainTasks.map((task) => ({
        ...task,
        childTasks: childTasks.filter(
          (childTask) => childTask.parentTaskId === task._id
        ),
      }));

      setTasks(currentTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="text" onClick={fetchData}>
        {/* TODO: いつか消す */}
        更新
      </Button>
      {tasks.map((task) => (
        <MainTaskList key={task._id} {...task} />
      ))}
    </>
  );
};
