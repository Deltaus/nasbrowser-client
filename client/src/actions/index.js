import axios from 'axios';
import {SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
    CREATE_VIDEO,
    FETCH_VIDEO,
    FETCH_VIDEOS,
    EDIT_VIDEO,
    DELETE_VIDEO,
    AUTH_ERROR
} from "./types";
import history from "../history";

export const signUp = ({username, password}) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/signUp', {username, password});
        dispatch({type: SIGN_UP, payload: res.data.token});
        localStorage.setItem('token', res.data.token);
        console.log('pushing to home');
        history.push('/');
    } catch (e) {
        dispatch({type: AUTH_ERROR, payload: 'username in use!'});
    }
}

export const signIn = ({username, password}) => async (dispatch) => {
    try {
        const res = await axios.post('/auth/login', {username, password});
        dispatch({type: SIGN_IN, payload: res.data.token});
        localStorage.setItem('token', res.data.token);
        console.log('logged in, redirecting to home page...');
        history.push('/');
    } catch (e) {
        dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'});
    }
}

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: SIGN_OUT,
        payload: ''
    }
}

export const createVideo = (data) => async (dispatch, getState) => {
    const {username} = getState().authObj;
    const res = await axios.post('/media/v', {...data, username});

    dispatch({type: CREATE_VIDEO, payload: res.data});
    history.push('/media/v');
}

export const fetchVideo = (id) => async (dispatch) => {
    const res = await axios.get('/media/v/'+id);
    dispatch({type: FETCH_VIDEO, payload: res.data});
}

export const fetchVideos = (id) => async (dispatch) => {
    const res= await axios.get('/media/v');
    dispatch({type: FETCH_VIDEOS, payload: res.data});
}

export const editVideo = (id, formValues) => async (dispatch) => {
    const res = await axios.patch('/media/v/'+id, formValues);
    dispatch({type: EDIT_VIDEO, payload: res.data});
    history.push('/media/v/'+id);
}

export const deleteVideo = (id) => async (dispatch) => {
    await axios.delete('/media/v/' + id);
    dispatch({type: DELETE_VIDEO, payload: id});
    history.push('/media/v');
}