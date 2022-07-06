import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";

const Profile = (props) => {
    return (<div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer store={props.store} />

    </div>);
}

export default Profile