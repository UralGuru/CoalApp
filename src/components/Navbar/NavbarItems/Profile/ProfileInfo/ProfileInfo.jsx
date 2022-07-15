import {React, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Bamboo from '../../../../../assets/images/profil_image.jpg';
import userPhoto from "../../../../../assets/images/user.png";
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatusHOOK from "./ProfileStatusHOOK";
import ProfileDataForm from "./ProfileDataForm";
import profile from "../Profile";


const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSaveProfile = (values) => {
        props.saveProfile(values).then(
            () => {
                setEditMode(false);

            }
        );
    }

    return (
        <div>
            <div><img className={s.img_content} src={Bamboo}/></div>

            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
                <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                {editMode ? <ProfileDataForm profile={props.profile}
                                             onSave={onSaveProfile}/>
                          : <ProfileData profile={props.profile}
                                         isOwner={props.isOwner}
                                         activatedEditMode={() => {setEditMode(true)}}/>}

                <ProfileStatusHOOK status={props.status} updateStatus={props.updateStatus}/>



            </div>
        </div>
    );
};


const ProfileData = ({profile, isOwner, activatedEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={activatedEditMode}>Edit profile</button></div>}

        <div>
            <b>Name: </b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a fob: </b>{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div>
            <b>My Contacts: </b> {Object.keys(profile.contacts).map(key =>{
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
        </div>
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contactInems}>
        <i>{contactTitle}: </i> {contactValue}
    </div>
}

export default Profile