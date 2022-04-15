import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reduceres = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reduceres);

export default store;