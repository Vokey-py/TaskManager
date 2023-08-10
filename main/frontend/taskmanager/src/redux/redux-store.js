import {combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit'
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";
import reducerUser from "./reducerUser";
import reducerAuth from "./reducerAuth";

let reducers = combineReducers({
        profilePage: reducerProfile,
        dialogPage: reducerDialogs,
        usersPage: reducerUser,
        auth: reducerAuth,
    }
)

let store = createStore(reducers);
window.store = store;

export default store;