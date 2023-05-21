import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Tasks } from "../pages/Home";
import memoApi from "../api/mainTaskApi";

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  task: Tasks;
};

const DetailMainTaskDialog = (props: Props) => {
  const deleteTask = async () => {
    const filter = {
      _id: { $oid: props.task._id },
    };
    await memoApi.deleteOne(filter);
    props.closeDialog();
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={props.isOpen}
      onClose={() => props.closeDialog()}
    >
      <DialogTitle>{props.task.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.task.details}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={deleteTask}>
          削除
        </Button>
        <Button variant="outlined" onClick={() => props.closeDialog()}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailMainTaskDialog;
