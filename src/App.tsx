import React, { useLayoutEffect } from "react";
import { Home } from "./pages/Home";
import { Headers } from "./components/Headers";
import axios from "axios";

const App = () => {
  useLayoutEffect(() => {
    axios
      .post(
        process.env.REACT_APP_MONGODB_ACCES_TOKEN_URL as string,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((tokenData) => {
        // TODO: ローカルストレージに保存すべきでないのでいつか対応する
        localStorage.setItem("access_token", tokenData.data.access_token);
      });
  }, []);

  return (
    <>
      <Headers />
      <Home />
    </>
  );
};

export default App;
