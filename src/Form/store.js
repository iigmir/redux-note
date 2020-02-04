import { alter_val } from "../Inputs/store/action";
import { alter_count } from "../Cart/store/action";

const state_to_local = state => ({
    val: state.inputs.val,
    count: state.count.val,
});

const action_to_local = {
    alter_val,
    alter_count
};

export { state_to_local, action_to_local };
