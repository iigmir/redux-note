import { ADD_TD, TOGGLE_TD } from "./actionTypes.js";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TD: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TD: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
