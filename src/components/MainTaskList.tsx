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
import memoApi from "../api/mainTaskApi";
import { Tasks } from "../pages/Home";

export const MainTaskList = (props: Tasks) => {
  const [openDetails, setOpenDetails] = React.useState(false);
  const [childTasks, setChildTasks] = React.useState(false);

  const handleOpenDetals = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleViewChildList = () => {
    setChildTasks(!childTasks);
  };

  const deleteTask = async () => {
    const filter = {
      _id: { $oid: props._id },
    };
    await memoApi.deleteOne(filter);
    setOpenDetails(false);
  };

  return (
    <React.Fragment>
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleViewChildList}>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
          <Button
            variant="outlined"
            onClick={(event) => {
              event.stopPropagation();
              handleOpenDetals();
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

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openDetails}
        onClose={handleCloseDetails}
      >
        <DialogTitle>
          {props._id}-{props.title}
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
          <Button variant="outlined" color="error" onClick={deleteTask}>
            削除
          </Button>
          <Button variant="outlined" onClick={handleCloseDetails}>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
