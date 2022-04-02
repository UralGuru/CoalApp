import { React } from 'react';
import s from "./Profile.module.css";
import Bamboo from '../../images/profil_image.jpg';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />

        </div>
    );
}

export default Profile