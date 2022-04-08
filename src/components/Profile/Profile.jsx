import {React} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPost} from "../../redux/state";

const Profile = (props) => {
    return (<div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}
                 newPostText={props.newPostText}
                 updateNewPost={props.updateNewPost}
                 addNewPost={props.addNewPost}/>

    </div>);
}

export default Profile