import s from './MyPosts.module.css'
import Post from "./Post/Post"
import React from "react"
import {Field, reduxForm} from "redux-form";
import ReduxAddPostForm from "./MyPostsForm";



const MyPosts = (props) => {


    let postsElements =
        props.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    let addPost = (values) =>{
        props.addPostEl(values.newPostElement)
    }

    return (
        <div className={s.myPostBlock}>
            <h3>My post</h3>
            <div>
                <ReduxAddPostForm onSubmit={addPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts