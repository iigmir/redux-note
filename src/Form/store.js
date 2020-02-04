import { alter_val } from "../Inputs/store/action.js";
import { alter_count } from "../Count/store/action.js";

const state_to_local = state => ({
    val: state.inputs.val,
    count: state.count.val,
});

const action_to_local = {
    alter_val,
    alter_count
};

export { state_to_local, action_to_local };
