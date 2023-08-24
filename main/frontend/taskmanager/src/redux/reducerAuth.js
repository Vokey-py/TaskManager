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
                ...action.payload,
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


export const thunkGetAuth = () => {
    return (dispatch) => {
        authAPI.checkAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }
}

export const thunkLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginAuth(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(thunkGetAuth())
            }
        });
    }
}

export const thunkLogout = () => {
    return (dispatch) => {
        authAPI.logoutAuth().then(response => {
            if (response.data.resultCode === 0) {
                 dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}
export default reducerAuth;