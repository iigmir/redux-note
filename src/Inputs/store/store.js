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
                val: action.payload.val
            };
        }
        case "OBJ":
        {
            return {
                ...state,
                obj: action.payload.obj
            };
        }
        // Reset
        default: return state;
    }
}
