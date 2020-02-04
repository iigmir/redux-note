import { REDUCE_STATE } from "./action-modules.js";

export const alter_count = count => ({
    type: REDUCE_STATE.COUNT,
    payload: { count }
});
