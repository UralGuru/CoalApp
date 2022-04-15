const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', like_count: '5'},
        {message: 'It\'s my first post', like_count: '11'},
        {message: 'Hi', like_count: '55'}],
    newPostText: "it-camasutra it's best"
}


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like_count: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newMessage;
            return state;
        default:
            return state;
    }
    return state
};


export const addPostActionCreator = () => ( {type: ADD_POST} );

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
    };
};

export default profileReducer;