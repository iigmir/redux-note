import { alter_val } from "./action.js";

const state_to_local = state => ({
    val: state.inputs.val
});

const action_to_local = { alter_val };

export { state_to_local, action_to_local };
