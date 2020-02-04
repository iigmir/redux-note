import { createStore, combineReducers } from "redux";
import todos from "./todos.js";
import inputs from "../Inputs/store.js";

export default createStore(
    // Reducers
    combineReducers({ todos, inputs })
);
