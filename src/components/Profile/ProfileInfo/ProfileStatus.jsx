import {Component, React} from 'react';
import s from "./ProfileInfo.module.css";
import Bamboo from '../../../assets/images/profil_image.jpg';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";


class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activatedEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.props.status || '-----'}</span>
                      </div>
                    : <div>
                        <input autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={this.deactivatedEditMode}
                               value={this.state.status}/>
                      </div>
                }
            </div>
        );
    }
}

export default ProfileStatus