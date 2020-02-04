import { initial_state, REDUCE_STATE } from "./action-modules.js";
export default ( state = initial_state, action ) =>
{
    switch ( action.type )
    {
        case REDUCE_STATE.COUNT:
        {
            return { ...state, count: action.payload.count };
        }
        // Reset
        default: return state;
    }
}
