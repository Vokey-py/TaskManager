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
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store;
window.store = store;