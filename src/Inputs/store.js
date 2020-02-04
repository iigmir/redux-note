const initial_state = {
    val: "FKC",
    obj: {}
};

export default function ( state = initial_state, action )
{
    switch ( action.type )
    {
        case "VAL":
        {
            return {
                ...state,
                val: state.val
            };
        }
        case "OBJ":
        {
            return {
                ...state,
                obj: state.obj
            };
        }
        // Reset
        default: return state;
    }
}
