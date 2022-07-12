import { React } from 'react';
import logoBamboo from '../../assets/images/logo.svg';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logoBamboo} alt="logo-bamboo" />

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logout}>LogOut</button>
                      </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header