import {React} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPost} from "./redux/store";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>

                        <Route exact path="/dialogs" element={<Dialogs store={props.store}/>}/>

                        <Route path="/news" element={<News />}/>
                        <Route path="/music" element={<Music />}/>
                        <Route path="/settings" element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
