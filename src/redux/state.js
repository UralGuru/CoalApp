import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', like_count: '5'},
                {message: 'It\'s my first post', like_count: '11'},
                {message: 'Hi', like_count: '55'}],
            newPostText: "it-camasutra it's best"
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
                {id: 4, mes: "Yo"}],
            newMessageBody: ""
        },
        sidebar: ""
    },
    _callSubscriber() { console.log("temp"); },
    getState() { return this._state },
    subscribe(observer) { this._callSubscriber = observer; },
    addNewPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like_count: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPost(newMessage) {
        this._state.profilePage.newPostText = newMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}






window.store = store;
export default store;