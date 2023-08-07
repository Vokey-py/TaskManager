const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCount: '10'},
        {id: 2, message: 'I good, and you?', likeCount: '23'},
    ],
    newPostText: 'it-kamasutra.com'
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
        default:
            return state
    }
}

export default reducerProfile;