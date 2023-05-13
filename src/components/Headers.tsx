import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import memoApi from "../api/mainTaskApi";

// const data = {
//   title: "sample_string2",
//   author: "sample_author3",
//   details: "sample_details4",
//   createTime: "2023-05-07T15:55:00.000+09:00",
// };

export const Headers = () => {
  const addMainTask = async () => {
    try {
      const res = await memoApi.findAll();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="text" onClick={addMainTask}>
      <PlaylistAddIcon />
      追加
    </Button>
  );
};
