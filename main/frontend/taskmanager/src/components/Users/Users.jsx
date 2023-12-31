import s from "./Users.module.css";
import photo from "../../assets/images/photoUsers.jpeg";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {thunkUnFollow} from "../../redux/reducerUser";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 1000);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photo} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>
                            {props.thunkUnFollow(u.id)}}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>
                            {props.thunkFollow(u.id)}}>Follow</button>}
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

export default Users