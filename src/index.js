import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Profiler from "./components/Profiler/Profiler";
import "./input.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Profiler id='App Netflix' phases={["mount"]}>
    <App />
  </Profiler>
);
