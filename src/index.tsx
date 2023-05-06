import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Headers } from "./components/Headers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Headers />
    <Home />
  </React.StrictMode>
);
