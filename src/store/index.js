import { createStore, combineReducers } from "redux";
import inputs from "../Inputs/store/store.js";

export default createStore(
    // Reducers
    combineReducers({ inputs }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
