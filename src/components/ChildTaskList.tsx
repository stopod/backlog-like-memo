import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import { ChildTask } from "./MainTaskList";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const ChildTaskList = (props: ChildTask | null) => {
  const [openDetails, setOpenDetails] = React.useState(false);

  const handleClickOpenDetals = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <TaskOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={props?.title} />
        <Button
          onClick={(event) => {
            event.stopPropagation();
            handleClickOpenDetals();
          }}
        >
          詳細
        </Button>
      </ListItemButton>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openDetails}
        onClose={handleCloseDetails}
      >
        <DialogTitle>
          {props?.id}-{props?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props?.details}</DialogContentText>
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
    </List>
  );
};
