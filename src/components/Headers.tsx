import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import memoApi from "../api/mainTaskApi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { FormEventHandler } from "react";

export const Headers = () => {
  const formRef = React.useRef();
  const [openAddTaskDialog, setOpenAddTaskDialog] = React.useState(false);

  const handleAddMainTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = new FormData(formRef.current);
    const title = data.get("title");
    const author = data.get("author");
    const details = data.get("details");

    try {
      const param = {
        collection: "MainTask",
        database: "BacklogLikeMemo",
        dataSource: "Cluster0",
        document: {
          title,
          author,
          details,
          createTime: new Date().toLocaleString(),
        },
      };
      const res = await memoApi.create(param);
      setOpenAddTaskDialog(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpendDialog = () => {
    setOpenAddTaskDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenAddTaskDialog(false);
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpendDialog}>
        {/* MainTaskListにあるべきなきがしてきた */}
        <PlaylistAddIcon />
        追加
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={openAddTaskDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>メインタスクの追加</DialogTitle>
        <DialogContent>
          <DialogContentText>各項目を入力してください</DialogContentText>
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleAddMainTask}
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
            <Button type="submit" variant="outlined">
              登録
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
