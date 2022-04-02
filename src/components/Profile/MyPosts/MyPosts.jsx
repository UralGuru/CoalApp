import {React} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {message: 'Hi, how are you?', like_count: '5'},
        {message: 'It\'s my first post', like_count: '11'},
        {message: 'Hi', like_count: '55'},
    ]

    let getPost = posts.map( p => <Post message={p.message} like_count={p.like_count} />)

    return (<div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <button>Add post</button>
            </div>

            <div className={s.posts}>
                { getPost }
            </div>
        </div>);
}

export default MyPosts