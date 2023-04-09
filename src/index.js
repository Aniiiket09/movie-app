import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";

import "./index.css";
import App from "./components/App";
import movies from "./reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = legacy_createStore(movies);
console.log("store ", store);
console.log("State ", store.getState());
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
