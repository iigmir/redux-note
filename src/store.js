import { createStore, combineReducers } from "redux";
import inputs from "./Inputs/store/reducer.js";
import count from "./Count/store/reducer.js";

export default createStore(
    // Reducers
    combineReducers({ inputs, count }),
    // Redux devtool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
