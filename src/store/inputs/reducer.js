const initial_state = {
    val: "Hello",
    obj: {}
};

export default ( state = initial_state, action ) =>
{
    switch ( action.type )
    {
        case "VAL":
        {
            return { ...state, val: action.payload.val };
        }
        case "OBJ":
        {
            return { ...state, obj: action.payload.obj };
        }
        // Reset
        default: return state;
    }
}
