const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateNewMessageText: text
    }
}


let initialState = {
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


const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.updateNewMessageText
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
                newMessageText: '',
            };
        }
        default:
            return state
    }
}


export default reducerDialogs;