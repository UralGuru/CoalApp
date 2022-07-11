import profileReducer, {addPostActionCreator} from "../profile-reducer";
import { render, screen } from '@testing-library/react';


test('lenght of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("T E S T");
    let state = {
        posts: [
            {message: 'Hi, how are you?', like_count: '5'},
            {message: 'It\'s my first post', like_count: '11'},
            {message: 'Hi', like_count: '55'}]
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expection
    expect(newState.posts.length).toBe(4);//newState.posts.length === 4;
});


