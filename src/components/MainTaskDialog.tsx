import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type MainTask = {
  id: number;
  title: string;
  details: string;
  author: string;
  childTask: number[] | null;
};

const TitleButton = styled(Button)({
  width: "100%",
  height: "50px",
  borderRadius: "3px",
  display: "block",
  margin: "3px",
  textAlign: "left",
});

const TitleIcon = styled(ArrowRightIcon)({
  display: "inline-block",
  verticalAlign: "middle",
});

export const MainTaskDialog = (props: MainTask) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* 表示 */}
      <TitleButton variant="outlined" onClick={handleClickOpen}>
        <TitleIcon />
        {props.title}
      </TitleButton>
      {/* 詳細 */}
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
