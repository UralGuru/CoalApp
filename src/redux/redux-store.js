import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reduceres = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

let store = createStore(reduceres);

window.store = store;

export default store;