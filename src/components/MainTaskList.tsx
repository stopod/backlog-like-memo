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

export const MainTaskList = (props: Tasks) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [childTasks, setChildTasks] = React.useState(false);

  const handleViewChildTasks = () => {
    setChildTasks(!childTasks);
  };

  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleViewChildTasks}>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
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
          {props.childTasks?.map((childTask) => {
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
        task={props}
      />
      {/* 登録用ダイアログ */}
      <RegisterChildTaskDialog
        isOpen={state.isRegisterChildTaskDialg}
        closeDialog={() =>
          dispatch({
            type: "closeRegisterChildTaskDialog",
          })
        }
        parentTaskId={props._id}
      />
    </React.Fragment>
  );
};
