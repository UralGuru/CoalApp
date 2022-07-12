import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {postID: 1, message: 'Hi, how are you?', like_count: '5'},
        {postID: 2, message: 'It\'s my first post', like_count: '11'},
        {postID: 3, message: 'Hi', like_count: '55'}],
    newPostText: "it-camasutra it's best",
    profile: null,
    status: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                postID: 5,
                message: state.newPostText,
                like_count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newMessage,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.postID !== action.postID)}
        }
        default:
            return state;
    }
    return state
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatys = (status) => ({type: SET_STATUS, status});
export const deletePost = (postID) => ({type: DELETE_POST, postID});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatys(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatys(status));
    };
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    };
};


export default profileReducer;