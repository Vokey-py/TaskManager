import React from "react"
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducerProfile";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }

                    return <MyPosts addPost={addPost}
                                    onPostChange={onPostChange}
                                    profilePage={store.getState().profilePage}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer