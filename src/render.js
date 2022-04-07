import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
