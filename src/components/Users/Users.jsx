import React from 'react';
import s from "../Profile/MyPosts/Post/Post.module.css";

let Users = (props) => {
    debugger;

    if(props.users.length === 0){
        props.setUsers(

            [{ id: 1, photoURL: '', followed: true, fullName: 'Batya', status: 'I am a boss', location: {city:'Minsk', country:'Belarus'} },
                { id: 2, photoURL: '', followed: true, fullName: 'Pop', status: 'I am a Gad', location: {city:'Moscow', country:'Russia'} },
                { id: 3, photoURL: '', followed: false, fullName: 'Mommy', status: 'No, I am a boss', location: {city:'Kiev', country:'Ukrain'} },
                { id: 4, photoURL: '', followed: false, fullName: 'Vova', status: 'Kind man', location: {city:'Minsk', country:'Belarus'} },
                { id: 5, photoURL: '', followed: true, fullName: 'Lesya', status: 'I am a boss too', location: {city:'EKB', country:'RF'} },
                { id: 6, photoURL: '', followed: false, fullName: 'Borya', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },
                { id: 7, photoURL: '', followed: true, fullName: 'Liss', status: 'I am a boss too', location: {city:'EKB', country:'RF'} },
                { id: 8, photoURL: '', followed: true, fullName: 'Nigger', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },
                { id: 9, photoURL: '', followed: false, fullName: 'Boor', status: 'I am a boss too', location: {city:'EKB', country:'RF'} },
                { id: 10, photoURL: '', followed: false, fullName: 'UrFU', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },
                { id: 11, photoURL: '', followed: false, fullName: 'Love', status: 'I am a boss too', location: {city:'EKB', country:'RF'} },
                { id: 12, photoURL: '', followed: false, fullName: 'Ssu', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },
                { id: 13, photoURL: '', followed: false, fullName: 'Klass', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },
                { id: 14, photoURL: '', followed: false, fullName: 'Vitya', status: 'I am a boss too', location: {city:'Minsk', country:'Belarus'} },]

        );
    }




    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.circle}></div>
                </span>
                <span>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;