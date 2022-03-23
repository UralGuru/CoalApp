import { React } from 'react';
import s from "./styles/Profile.module.css";
import Bamboo from './images/profil_image.jpg';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img_content} src={Bamboo}></img>
            </div>
            <div>
                ava + des
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile