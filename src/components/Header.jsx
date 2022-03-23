import { React } from 'react';
import logoBamboo from './images/logo.png';
import "./styles/Header.css";

const Header = () => {
    return (
        <header className='header'>
            <img src={logoBamboo} alt="logo-bamboo" />
        </header>
    );
}

export default Header