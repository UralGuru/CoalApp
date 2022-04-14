const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
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
}

export default profileReducer;