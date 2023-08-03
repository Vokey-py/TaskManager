const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 6, message: body});
    }
    return state
}


export default reducerDialogs;