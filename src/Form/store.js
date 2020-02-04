import { alter_val } from "../store/inputs/action.js";
import { alter_count } from "../store/count/action.js";

const state_to_local = state => ({});

const action_to_local = {
    alter_val,
    alter_count
};

export { state_to_local, action_to_local };
