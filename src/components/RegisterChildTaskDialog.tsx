import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
};

const RegisterChildTaskDialog = (props: Props) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={props.isOpen}
      onClose={() => props.closeDialog()}
    >
      <DialogTitle>タスクの追加</DialogTitle>
      <DialogContent>
        <DialogContentText>ああああ</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="success"
          onClick={() => console.log("")}
        >
          登録
        </Button>
        <Button variant="outlined" onClick={() => props.closeDialog()}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RegisterChildTaskDialog;
