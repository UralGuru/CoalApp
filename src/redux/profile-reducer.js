import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', like_count: '5'},
        {message: 'It\'s my first post', like_count: '11'},
        {message: 'Hi', like_count: '55'}],
    newPostText: "it-camasutra it's best",
    profile: null,
    status: "",
}


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                like_count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }

        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newMessage,
            };
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status,
            };
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile}
        }

        default:
            return state;
    }
    return state
};


export const addPostActionCreator = () => ( {type: ADD_POST} );
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} );
export const setStatys = (status) => ( {type: SET_STATUS, status} );

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(respons => {
                dispatch(setUserProfile(respons.data));
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(respons => {
                dispatch(setStatys(respons.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(respons => {
                if (respons.data.resultCode === 0){
                    dispatch(setStatys(status));
                }

            });
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    };
};



export default profileReducer;