import {React} from 'react';
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from "./components/Navbar/NavbarItems/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/Navbar/NavbarItems/News/News";
import Music from "./components/Navbar/NavbarItems/Music/Music";
import Settings from "./components/Navbar/NavbarItems/Settings/Settings";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Navbar/NavbarItems/Profile/ProfileContainer";
import Login from "./components/Login/login";





const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId"
                               element={<ProfileContainer store={props.store} />}/>

                        <Route path="/profile"
                               element={<ProfileContainer store={props.store} />}/>

                        <Route exact path="/dialogs"
                               element={<DialogsContainer store={props.store} />}/>

                        <Route exact path="/login"
                               element={<Login store={props.store} />}/>

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
