import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TaskIcon from "@mui/icons-material/Task";
import { ChildTaskList } from "./ChildTaskList";
import { Tasks } from "../pages/Home";
import RegisterChildTaskDialog from "./RegisterChildTaskDialog";
import DetailMainTaskDialog from "./DetailMainTaskDialog";
import {
  State,
  Action,
  initialState,
  reducer,
} from "../reducer/MainTaskListReducer";

type Props = {
  task: Tasks;
  reloadTasks: () => void;
};

export const MainTaskList = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [childTasks, setChildTasks] = React.useState(false);

  const handleViewChildTasks = () => {
    setChildTasks(!childTasks);
  };

  // とりあえず、これだとダイアログ開閉のたびにfetchしちゃう
  React.useEffect(() => {
    console.log("render");
    props.reloadTasks();
  }, [state]);

  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleViewChildTasks}>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary={props.task.title} />
          <Button
            variant="outlined"
            onClick={(event) => {
              event.stopPropagation();
              dispatch({
                type: "openRegisterChildTaskDialog",
              });
            }}
            style={{ marginRight: 10 }}
          >
            追加
          </Button>
          <Button
            variant="outlined"
            onClick={(event) => {
              event.stopPropagation();
              dispatch({
                type: "openDetailMainTaskDialog",
              });
            }}
            style={{ marginRight: 10 }}
          >
            詳細
          </Button>
          {childTasks ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={childTasks} timeout="auto" unmountOnExit>
          {props.task.childTasks?.map((childTask) => {
            return <ChildTaskList key={childTask._id} {...childTask} />;
          })}
        </Collapse>
      </List>

      {/* 詳細用ダイアログ */}
      <DetailMainTaskDialog
        isOpen={state.isDetailMainTaskDialog}
        closeDialog={() =>
          dispatch({
            type: "closeDetailMainTaskDialog",
          })
        }
        task={props.task}
      />
      {/* 登録用ダイアログ */}
      <RegisterChildTaskDialog
        isOpen={state.isRegisterChildTaskDialg}
        closeDialog={() =>
          dispatch({
            type: "closeRegisterChildTaskDialog",
          })
        }
        parentTaskId={props.task._id}
      />
    </React.Fragment>
  );
};
