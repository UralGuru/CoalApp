import React from 'react';
import s from "../Profile/MyPosts/Post/Post.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component{
    constructor(props) {
        super(props);

        if(this.props.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons =>{
                this.props.setUsers(respons.data.items);
            });
        }
    }

    getUsers = () => {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons =>{
                this.props.setUsers(respons.data.items);
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={s.circle} alt=""/>
                    </div>
                </span>
                    <span>
                    { u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}

                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users