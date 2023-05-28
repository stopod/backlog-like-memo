import { memo, useEffect, useReducer, useState } from "react";
import { MainTaskList } from "../components/MainTaskList";
import maintTaskApi from "../api/mainTaskApi";
import childTaskApi, { ChildTask } from "../api/childTaskApi";
import Button from "@mui/material/Button";
import { State, Action, initialState, reducer } from "../reducer/HomeReducer";
import axios from "axios";

export type Tasks = {
  _id: string;
  title: string;
  details: string;
  author: string;
  createTime: string;
  childTasks: ChildTask[] | null | undefined;
};

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .post(
        process.env.REACT_APP_MONGODB_ACCES_TOKEN_URL as string,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((tokenData) => {
        // TODO: ローカルストレージに保存すべきでないのでいつか対応する
        localStorage.setItem("access_token", tokenData.data.access_token);

        fetchData();
      });
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

      dispatch({
        type: "getTasks",
        data: currentTasks,
      });
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
      {state
        ? state.tasks.map((task) => (
            <MainTaskList
              key={task._id}
              task={task}
              reloadTasks={() => fetchData()}
            />
          ))
        : null}
    </>
  );
};
