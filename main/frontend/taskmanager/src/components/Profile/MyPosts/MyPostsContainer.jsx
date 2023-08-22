import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/reducerProfile";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostEl: (newPostElement) => {
            dispatch(addPostActionCreator(newPostElement))
        },
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer