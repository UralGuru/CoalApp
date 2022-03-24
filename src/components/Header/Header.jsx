import { React } from 'react';
import logoBamboo from '../../images/logo.png';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logoBamboo} alt="logo-bamboo" />
        </header>
    );
}

export default Header