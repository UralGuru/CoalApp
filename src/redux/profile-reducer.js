import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', like_count: '5'},
        {message: 'It\'s my first post', like_count: '11'},
        {message: 'Hi', like_count: '55'}],
    newPostText: "it-camasutra it's best",
    profile: null,
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
export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(respons => {
                dispatch(setUserProfile(respons.data));
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