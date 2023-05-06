import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useEffect } from "react";

export const Headers = () => {
  const addMainTask = () => {
    console.log("sample add main task");
  };

  return (
    <Button variant="text" onClick={addMainTask}>
      <PlaylistAddIcon />
      追加
    </Button>
  );
};
