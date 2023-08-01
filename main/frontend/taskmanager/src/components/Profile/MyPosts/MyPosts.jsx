import s from './MyPosts.module.css'
import Post from "./Post/Post"
import React from "react";

let addPost

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    let postsElements = props.state.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    return (
        <div className={s.myPostBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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