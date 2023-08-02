import s from './MyPosts.module.css'
import Post from "./Post/Post"
import React from "react";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    let postsElements = props.profilePage.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    return (
        <div className={s.myPostBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts