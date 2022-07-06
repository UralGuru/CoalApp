import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
};*/


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: ()=>{dispatch(addPostActionCreator());}
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;