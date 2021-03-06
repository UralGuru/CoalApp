import profileReducer, {addPostActionCreator, deletePost} from "../profile-reducer";

let state = {
    posts: [
        {postID: 1, message: 'Hi, how are you?', like_count: '5'},
        {postID: 2, message: 'It\'s my first post', like_count: '11'},
        {postID: 3, message: 'Hi', like_count: '55'}]
};

test('lenght of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("T E S T");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expection
    expect(newState.posts.length).toBe(4);//newState.posts.length === 4;
});

test('after deleting length of message should be decrement', () => {
    let action = deletePost(2);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});


