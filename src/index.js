import React, { createContext } from "react";
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

export const StoreContext = createContext();
console.log("StoreContext", StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
//updating store by dispatching action
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ title: "Superman" }],
// });
// console.log(" After State ", store.getState());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </React.StrictMode>
);
