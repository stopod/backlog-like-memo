import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import memoApi from "../api/childTaskApi";

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  parentTaskId: string;
};

const RegisterChildTaskDialog = (props: Props) => {
  const formRef = React.useRef();

  const registerChildTask: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const title = data.get("title") as string;
    const author = data.get("author") as string;
    const details = data.get("details") as string;
    await memoApi.create({
      title,
      details,
      author,
      status: 0,
      parentTaskId: props.parentTaskId,
    });
    props.closeDialog();
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={props.isOpen}
      onClose={() => props.closeDialog()}
    >
      <DialogTitle>タスクの追加</DialogTitle>
      <DialogContent>
        <DialogContentText>各項目を入力してください</DialogContentText>
        <Box
          component="form"
          ref={formRef}
          onSubmit={registerChildTask}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            id="title"
            label="タイトル"
            margin="normal"
            name="title"
            required
            variant="standard"
          />
          <TextField
            fullWidth
            id="author"
            label="登録者"
            margin="normal"
            name="author"
            required
            variant="standard"
          />
          <TextField
            fullWidth
            id="details"
            label="詳細"
            margin="normal"
            name="details"
            variant="filled"
            multiline
            rows={3}
            required
          />
          <Button type="submit" variant="outlined" color="success">
            登録
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => props.closeDialog()}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RegisterChildTaskDialog;
