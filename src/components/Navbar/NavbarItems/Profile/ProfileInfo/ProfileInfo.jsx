import { React } from 'react';
import s from "./ProfileInfo.module.css";
import Bamboo from '../../../../../assets/images/profil_image.jpg';
import Preloader from "../../../../common/Preloader/Preloader";
import userPhoto from "../../../../../assets/images/user.png";

import ProfileStatus from "./ProfileStatus"
import ProfileStatusHOOK from "./ProfileStatusHOOK";


const Profile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div><img className={s.img_content} src={Bamboo}></img></div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>

                <ProfileStatusHOOK status={props.status} updateStatus={props.updateStatus}/>

                <div>{props.profile.aboutMe}</div>
                <div>
                    <h3>My Contacts:</h3>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>

                </div>
            </div>
        </div>
    );
}

export default Profile