import {SIGN_IN, SIGN_OUT} from "../actions/types";

const INITIAL_STATE = {
    signInState: null,
    userId: null
};

export const authState = (state = INITIAL_STATE, action) => {
    let newState = state;
    switch (action.type) {
        case SIGN_IN:
            newState = {...state, signInState: true, userId: action.payload}
            break;
        case SIGN_OUT:
            newState = {...state, signInState: false, userId: null}
            break;
    }
    return newState;
}