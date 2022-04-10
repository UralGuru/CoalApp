import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
reportWebVitals();


