import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likeCount: '10'},
                {id: 2, message: 'I good, and you?', likeCount: '23'},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Vasya'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'My name'},
                {id: 3, message: 'Is Ruslan'}
            ],
            newMessageText: 'itkamasutra'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action)
        this._state.dialogPage = reducerDialogs(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    }
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


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}



export default store;
window.store = store;