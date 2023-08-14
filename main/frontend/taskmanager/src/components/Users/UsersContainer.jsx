import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetchingProgress, thunkFollow, thunkGetUsers, thunkUnFollow,
    unfollow
} from "../../redux/reducerUser";
import Users from "./Users";
import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

class UsersAjaxComponent extends React.Component {

    componentDidMount() {
        this.props.thunkGetUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.thunkGetUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   mpUnFollow={this.props.unfollow}
                   mpFollow={this.props.follow}
                   setIsFetchingProgress={this.props.setIsFetchingProgress}
                   followingInProgress={this.props.followingInProgress}
                   thunkFollow={this.props.thunkFollow}
                   thunkUnFollow={this.props.thunkUnFollow}
            />
        </>

    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }

}

/*let mapDispatchToProps = (dispatch) => {
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
        mpSetIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default compose(
    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFetchingProgress,
    thunkGetUsers,
    thunkFollow,
    thunkUnFollow
}),
    withAuthRedirect
)(UsersAjaxComponent)
