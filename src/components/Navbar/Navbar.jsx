import {React} from 'react';
import s from "./Navbar.module.css";
import {NavLink} from 'react-router-dom'

const isActiveLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className={isActiveLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/dialogs' className={isActiveLink}>Message</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/users' className={isActiveLink}>Users</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/music' className={isActiveLink}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' className={isActiveLink}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/settings' className={isActiveLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar