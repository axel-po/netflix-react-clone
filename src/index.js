import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Profiler from "./components/Profiler/Profiler";
import "./input.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Profiler id='App Netflix' phases={["mount"]}>
    <Router>
      <App />
    </Router>
  </Profiler>
);
