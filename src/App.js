import {Component} from 'react';
import React from 'react';
import './App.css';
import {HashRouter, Routes, Route, withRouter, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';

import News from "./components/Navbar/NavbarItems/News/News";
import Music from "./components/Navbar/NavbarItems/Music/Music";
import Settings from "./components/Navbar/NavbarItems/Settings/Settings";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer =  React.lazy(() => import('./components/Navbar/NavbarItems/Profile/ProfileContainer'));
const Login =  React.lazy(() => import('./components/Login/login'));
const UsersContainer =  React.lazy(() => import('./components/Navbar/NavbarItems/Users/UsersContainer'));
const DialogsContainer =  React.lazy(() => import('./components/Navbar/NavbarItems/Dialogs/DialogsContainer'));



//const ProfileContainer = React.lazy(() => import("./components/Navbar/NavbarItems/Profile/ProfileContainer"));
//const Login = React.lazy(() => import("./components/Login/login"));
//const UsersContainer = React.lazy(() => import("./components/Navbar/NavbarItems/Users/UsersContainer"));
//const DialogsContainer = React.lazy(() => import("./components/Navbar/NavbarItems/Dialogs/DialogsContainer"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                {/*HashRouter*/}
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className="app-wrapper-content">
                        <React.Suspense fallback={<div><Preloader /></div>}>
                        <Routes>

                                <Route path="/profile/:userId"
                                       element={<ProfileContainer store={this.props.store}/>}/>
                                <Route path="/profile"
                                       element={<ProfileContainer store={this.props.store}/>}/>
                                <Route exact path="/dialogs"
                                       element={<DialogsContainer store={this.props.store}/>}/>
                                <Route exact path="/login"
                                       element={<Login store={this.props.store}/>}/>
                                <Route path="/users"
                                       element={<UsersContainer/>}/>

                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                </React.Suspense>

            </div>
                </div>
            </HashRouter>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);
