import {SIGN_IN, SIGN_OUT, SIGN_UP, AUTH_ERROR} from "../actions/types";

const INITIAL_STATE = {
    auth: null,
    //username: null,
    errorMessage: ''
};

export const authState = (state = INITIAL_STATE, action) => {
    let newState = state;
    switch (action.type) {
        case SIGN_IN:
            newState = {...state, auth: action.payload, errorMessage: ''}
            break;
        case SIGN_OUT:
            newState = {...state, auth: action.payload, errorMessage: ''}
            break;
        case SIGN_UP:
            newState = {...state, auth: action.payload, errorMessage: ''}
            break;
        case AUTH_ERROR:
            newState = {...state, errorMessage: action.payload}
            break;
    }
    return newState;
}