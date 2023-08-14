import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'


let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCount: '10'},
        {id: 2, message: 'I good, and you?', likeCount: '23'},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})


const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: '23',
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const thunkGetUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const thunkGetStatusUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatusUserProfile(userId).then(response => {
            dispatch(setStatusProfile(response.data));
        });
    }
}

export const thunkUpdateStatusUserProfile = (status) => {
    return (dispatch) => {
        profileAPI.putStatusUserProfile(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status));
            }
        });
    }
}

export default reducerProfile;