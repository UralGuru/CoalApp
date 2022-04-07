import {renderEntireTree} from "../render";

let state ={
    profilePage: {
        posts: [
            {message: 'Hi, how are you?', like_count: '5'},
            {message: 'It\'s my first post', like_count: '11'},
            {message: 'Hi', like_count: '55'}]
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Marins'},
            {id: 2, name: 'Ural'},
            {id: 3, name: 'Danya'},
            {id: 4, name: 'Matvey'},
            {id: 5, name: 'Rustic'},
            {id: 6, name: 'Vova'}],
        messages: [
            {id: 1, mes: "How a u, my hommy?"},
            {id: 2, mes: "Hi"},
            {id: 3, mes: "Go buxaty"},
            {id: 4, mes: "Yo"}]
    }
};

export let addNewPost = (newMessage) => {
    let newPost = {
        id: 5,
        message: newMessage,
        like_count: 0
    };

    state.profilePage.posts.push(newPost);

    renderEntireTree(state)
}

export default state;