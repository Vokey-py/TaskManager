import {applyMiddleware, combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit'
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";
import reducerUser from "./reducerUser";
import reducerAuth from "./reducerAuth";
import thunk from "redux-thunk"
import {reducer as reducerForm} from "redux-form";

let reducers = combineReducers({
        profilePage: reducerProfile,
        dialogPage: reducerDialogs,
        usersPage: reducerUser,
        auth: reducerAuth,
        form: reducerForm
    }
)

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;