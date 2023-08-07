import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/reducerUser";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        mpSetCurrentPage: (NumberPage) => {
            dispatch(setCurrentPageAC(NumberPage))
        },
        mpSetTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);