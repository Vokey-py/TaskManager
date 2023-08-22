
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageActionCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
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
}


const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };
        }
        default:
            return state
    }
}


export default reducerDialogs;