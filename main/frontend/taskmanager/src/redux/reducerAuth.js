import {authAPI, usersAPI} from "../api/api";
import {setUserProfile} from "./reducerProfile";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
}


const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})


export const thunkGetAuth = () => {
    return (dispatch) => {
        authAPI.checkAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
    }
}
export default reducerAuth;