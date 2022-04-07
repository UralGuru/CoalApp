import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let getPost = props.posts.map( p => <Post message={p.message} like_count={p.like_count} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addNewPost(text);
        newPostElement.current.value = ""
    }


    return (<div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>

                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                { getPost }
            </div>
        </div>);
};

export default MyPosts