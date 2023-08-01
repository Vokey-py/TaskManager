import s from './MyPosts.module.css'
import Post from "./Post/Post"

let postData = [
    {id: 1, message: 'Hi, how are you?', likeCount: '10'},
    {id: 2, message: 'I good, and you?', likeCount: '23'},
]

let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

const MyPosts = () => {
    return (
        <div className={s.myPostBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts