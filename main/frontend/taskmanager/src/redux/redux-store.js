import { combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit'
import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";

let reducers = combineReducers({
        profilePage: reducerProfile,
        dialogPage: reducerDialogs
    }
)

let store = createStore(reducers);

export default store;