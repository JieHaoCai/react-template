import * as types from "../actionTypes"
const initState = {
    name: "xiaoming"
}

export default function test(state = initState, action) {
    switch (action.type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: action.params,
            };

        default:
            return state;
    }
}