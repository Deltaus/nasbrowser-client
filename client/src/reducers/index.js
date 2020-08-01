import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {authState} from "./authReducer";

export default combineReducers({
    auth: authState,
    form: formReducer
});