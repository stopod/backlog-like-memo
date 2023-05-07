import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useEffect } from "react";
import mainTaskApi, { MainTask } from "../api/mainTaskApi";

import axios from "axios";

const getToken = () => localStorage.getItem("token");

export const Headers = () => {
  const addMainTask = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjQ1NzM4M2Y4ODAyNTY3MGY1ZTkzYWM1IiwiZXhwIjoxNjgzNDUwNDY1LCJpYXQiOjE2ODM0NDg2NjUsImlzcyI6IjY0NTc2MzU5ODgwMjU2NzBmNWY0Zjg2ZSIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY0NTczODNmODgwMjU2NzBmNWU5M2FjNSIsInN1YiI6IjY0NTczOGVkZWFhMTc5YmRiOTVjMDhiMiIsInR5cCI6ImFjY2VzcyJ9.ZeG2WD_tfvhxbzaxFUuuugu4O4oa-DiAdiim76y3bKY";

    const url =
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ncbvy/endpoint/data/v1/action/insertOne";

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
        "api-key": "---",
      },
    };

    console.log(config);

    const data = {
      title: "sample_string2",
      author: "sample_author3",
      details: "sample_details4",
      createTime: "2023-05-07T15:55:00.000+09:00",
    };

    const document = {
      collection: "MainTask",
      database: "BacklogLikeMemo",
      dataSource: "Cluster0",
      document: data,
    };
    const body = JSON.stringify(document);

    try {
      const res = await axios.post(url, body, config);
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
