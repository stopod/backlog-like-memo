import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import { ChildTask } from "./MainTaskList";

export const ChildTaskList = (props: ChildTask | null) => {
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <TaskOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={props?.title} />
      </ListItemButton>
    </List>
  );
};
