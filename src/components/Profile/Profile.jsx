import { React } from 'react';
import s from "./Profile.module.css";
import Bamboo from '../images/profil_image.jpg';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img_content} src={Bamboo}></img>
            </div>

            <div>
                ava + des
            </div>

            <MyPosts />

        </div>
    );
}

export default Profile