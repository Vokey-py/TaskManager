import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import photo from "./../../assets/images/photoUsers.jpeg"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                    debugger;
            this.props.mpSetUsers(response.data.items);
            this.props.mpSetTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.mpSetCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.mpSetUsers(response.data.items);
        });
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize/ 1000);
        let pages = [];
        for (let i=1; i<= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <span>
                {pages.map(p => {
                  return <span className={this.props.currentPage === p && s.selectedPage}
                               onClick={(e) => {this.onPageChanged(p)}}> {p} </span>
                })}
            </span>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : photo} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.mpUnFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.mpFollow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'asga'}</div>
                            <div>{'sagga'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }

}

export default Users