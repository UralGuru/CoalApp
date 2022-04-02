import { React } from 'react';
import s from "./ProfileInfo.module.css";
import Bamboo from '../../../images/profil_image.jpg';

const Profile = () => {
    return (
        <div>
            <div><img className={s.img_content} src={Bamboo}></img></div>

            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
}

export default Profile