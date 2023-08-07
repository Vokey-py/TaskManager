import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducerUser";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        mpFollow: (userId) => {
            dispatch(followAC(userId))
        },
        mpUnFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        mpSetUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);