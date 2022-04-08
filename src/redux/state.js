const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
                {id: 4, mes: "Yo"}]
        }
    },
    _callSubscriber () {
        console.log("temp");
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

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

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like_count: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){

            this._state.profilePage.newPostText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text};
};


window.store = store;
export default store;