import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TaskIcon from "@mui/icons-material/Task";
import { ChildTaskList } from "./ChildTaskList";

export type MainTask = {
  id: number;
  title: string;
  details: string;
  author: string;
  childTasks: ChildTask[] | null;
};

export type ChildTask = {
  id: number;
  title: string;
  details: string;
  author: string;
  status: number;
};

export const MainTaskList = (props: MainTask) => {
  const [openDetails, setOpenDetails] = React.useState(false);
  const [childTasks, setChildTasks] = React.useState(false);

  const handleClickOpenDetals = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleClick = () => {
    setChildTasks(!childTasks);
  };

  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
          <Button
            onClick={(event) => {
              event.stopPropagation();
              handleClickOpenDetals();
            }}
          >
            詳細
          </Button>
          {childTasks ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={childTasks} timeout="auto" unmountOnExit>
          {props.childTasks?.map((childTask, index) => {
            console.log(props.childTasks);
            return <ChildTaskList key={index} {...childTask} />;
          })}
        </Collapse>
      </List>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openDetails}
        onClose={handleCloseDetails}
      >
        <DialogTitle>
          {props.id}-{props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props.details}</DialogContentText>
          {/* <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
