import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../../../common/paginator";

let Users = (props) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged }
                   pageLenght={10}/>

        {
            props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={s.circle} alt=""/>
                        </NavLink>
                    </div>
                </span>
                <span>

                    { u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

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

export default Users;

