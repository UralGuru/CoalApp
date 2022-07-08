import {Component, React} from 'react';
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';

import DialogsContainer from "./components/Navbar/NavbarItems/Dialogs/DialogsContainer";
import UsersContainer from "./components/Navbar/NavbarItems/Users/UsersContainer";
import News from "./components/Navbar/NavbarItems/News/News";
import Music from "./components/Navbar/NavbarItems/Music/Music";
import Settings from "./components/Navbar/NavbarItems/Settings/Settings";

import {BrowserRouter, Routes, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Navbar/NavbarItems/Profile/ProfileContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";


class App extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId"
                                   element={<ProfileContainer store={this.props.store}/>}/>

                            <Route path="/profile"
                                   element={<ProfileContainer store={this.props.store}/>}/>

                            <Route exact path="/dialogs"
                                   element={<DialogsContainer store={this.props.store}/>}/>

                            <Route exact path="/login"
                                   element={<Login store={this.props.store}/>}/>

                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default connect(null,{getAuthUserData})(App);
