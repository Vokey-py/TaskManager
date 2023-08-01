import {renderEntireTree} from "../render";


let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likeCount: '10'},
            {id: 2, message: 'I good, and you?', likeCount: '23'},
        ],
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
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.postData.push(newPost)
    renderEntireTree(state)
}
export default state