import {React} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>

            <div className={s.posts}>

                <Post message='Hi, how are you?' like_count='5'/>
                <Post message="It's my first post" like_count='7'/>
                <Post/>

            </div>
        </div>);
}

export default MyPosts