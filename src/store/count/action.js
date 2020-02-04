import { REDUCE_STATE } from "./state.js";

export const alter_count = count => ({
    type: REDUCE_STATE.COUNT,
    payload: { count }
});
