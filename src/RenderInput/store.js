const state_to_local = state => ({
    val: state.inputs.val,
    count: state.count.count,
});

const action_to_local = {};

export { state_to_local, action_to_local };
