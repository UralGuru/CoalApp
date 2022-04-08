import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPost} from "../../../redux/state";

const MyPosts = (props) => {

    let getPost = props.posts.map( p => <Post message={p.message}
                                              like_count={p.like_count} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addNewPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }


    return (<div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>

                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                { getPost }
            </div>
        </div>);
};

export default MyPosts