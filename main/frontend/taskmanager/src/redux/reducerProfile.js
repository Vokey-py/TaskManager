import profile from "../components/Profile/Profile";
import {usersAPI} from "../api/api";
import {follow, setIsFetchingProgress} from "./reducerUser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCount: '10'},
        {id: 2, message: 'I good, and you?', likeCount: '23'},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
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
        default:
            return state
    }
}

export const thunkGetUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export default reducerProfile;