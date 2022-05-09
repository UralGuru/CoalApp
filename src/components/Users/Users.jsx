import React from "react";
import s from "../Profile/MyPosts/Post/Post.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {

    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //
    // let pages = [];
    // for (let i=1; i<=pageCount; i++){
    //     pages.push(i)
    // }

    const PAGES_LENGTH = 11;
    const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagesCount = totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
    const half = Math.floor(pagesCount / 2);
    let startPage = props.currentPage - half;
    if (startPage < 1) startPage = 1;
    if ((startPage + pagesCount) > totalPagesCount) startPage = totalPagesCount - pagesCount;

    const pages = [];
    for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map( p => {
                return <span className={props.currentPage===p  && s.selectedPage}
                             onClick={ (e) => {props.onPageChanged(p); }}>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={s.circle} alt=""/>
                    </div>
                </span>
                <span>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

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

