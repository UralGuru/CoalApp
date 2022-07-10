import {Component, React, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Bamboo from '../../../../../assets/images/profil_image.jpg';
import Preloader from "../../../../common/Preloader/Preloader";
import userPhoto from "../../../../../assets/images/user.png";


const ProfileStatusHOOK = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);
    
    const activatedEditMode = () => {
      setEditMode(true);
    };

    const deactivatedEditMode = () => {
      setEditMode(false);
      props.updateStatus(status)
    };

    const onStatusChange = (e) => {
      setStatus(e.target.value)
    };



    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activatedEditMode}>{status || '-----'}</span>
                </div>
                : <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={deactivatedEditMode}
                           value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusHOOK