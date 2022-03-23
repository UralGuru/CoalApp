import { React } from 'react';
import "./styles/Profile.css";
import Bamboo from './images/profil_image.jpg';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img className='img-content' src={Bamboo}></img>
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
                    <div className='item'>
                        Post 1
                    </div>
                    <div className='item'>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile