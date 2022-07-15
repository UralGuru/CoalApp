import {React, useEffect, useState} from 'react';


const ProfileStatusHOOK = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    
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
                    <b>Status: </b><span onDoubleClick={activatedEditMode}>{status || '-----'}</span>
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