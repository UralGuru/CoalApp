import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./render";
import state from "./redux/state";

renderEntireTree(state);

reportWebVitals();
