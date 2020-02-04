export const alter_val = val => ({
    type: "VAL",
    payload: { val }
});

export const alter_obj = obj => ({
    type: "OBJ",
    payload: { obj }
});
