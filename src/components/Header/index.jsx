import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
    const handleIsActive = ({ isActive }) => {
        return isActive ? 'active' : '';
    }
    return (
        <header>
            <NavLink to="/" className={`logo ${handleIsActive}`}>MindX</NavLink>
            <div className="options">
                <ul>
                    <li>
                        <NavLink className={handleIsActive} to="/user">User</NavLink>
                        <NavLink className={handleIsActive} to="/about">About</NavLink>
                        <NavLink className={handleIsActive} to="/log-in">Log in</NavLink>
                        <NavLink className={handleIsActive} to="/sign-up">Sign up</NavLink>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header