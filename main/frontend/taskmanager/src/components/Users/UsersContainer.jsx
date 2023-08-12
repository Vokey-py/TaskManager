import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching, setIsFetchingProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/reducerUser";
import Users from "./Users";
import React from 'react'
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAjaxComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
        });
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
        followingInProgress: state.usersPage.followingInProgress
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


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setIsFetchingProgress
})(UsersAjaxComponent);