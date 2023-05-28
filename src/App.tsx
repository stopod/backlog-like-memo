import React, { useLayoutEffect } from "react";
import { Home } from "./pages/Home";
import { Headers } from "./components/Headers";

const App = () => {
  return (
    <>
      <Headers />
      <Home />
    </>
  );
};

export default App;
