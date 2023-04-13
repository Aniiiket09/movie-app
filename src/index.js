import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducer";

//fuction logger(obj,dispatch, getState)
//logger(obj)(dispatch)(getState)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE=", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE=", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //logger code
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store ", store);
// console.log(" Before State ", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ title: "Superman" }],
// });
// console.log(" After State ", store.getState());

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
