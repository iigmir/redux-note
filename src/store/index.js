import { createStore, combineReducers } from "redux";
import inputs from "./inputs/reducer.js";
import count from "./count/reducer.js";

export default createStore(
    // Reducers
    combineReducers({ inputs, count }),
    // Redux devtool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
