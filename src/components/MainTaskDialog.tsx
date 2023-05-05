import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export type MainTask = {
  id: number;
  title: string;
  details: string;
  author: string;
  childTask: number[] | null;
};

// const useStyles = makeStyles((theme) => ({
//   button: {
//     width: "150px",
//     height: "150px",
//     borderRadius: "3px",
//     display: "block",
//   },
// }));

export const MainTaskDialog = (props: MainTask) => {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        // className={classes.button}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {props.title}
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
