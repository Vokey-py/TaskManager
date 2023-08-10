import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/reducerUser";
import axios from "axios";
import Users from "./Users";
import React from 'react'
import Preloader from "../common/Preloader/Preloader";

class UsersAjaxComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items);
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
        />
        </>

    }

}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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


export default connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersAjaxComponent);