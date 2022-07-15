import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (<div>
        <ProfileInfo profile={props.profile}
                     isOwner={props.isOwner}
                     status={props.status}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer store={props.store} />
    </div>);
}

export default Profile