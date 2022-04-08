import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addNewPost, subscribe, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPost={updateNewPost}
                 addNewPost={addNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(state);
subscribe(renderEntireTree);
reportWebVitals();


