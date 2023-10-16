import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import List from "./List.jsx";

import Planet from "./Planet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Planet />
  </React.StrictMode>
);
