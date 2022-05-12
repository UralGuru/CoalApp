import {React} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile"
                               element={<ProfileContainer store={props.store} />}/>

                        <Route exact path="/dialogs"
                               element={<DialogsContainer store={props.store} />}/>

                        <Route path="/users" element={<UsersContainer />}/>
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
