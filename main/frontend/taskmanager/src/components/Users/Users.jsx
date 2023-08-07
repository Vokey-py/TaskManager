import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import photo from "./../../assets/images/photoUsers.jpeg"

class Users extends React.Component {

    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.mpSetUsers(response.data.items);
            });
    }

    render() {
        return <div>
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