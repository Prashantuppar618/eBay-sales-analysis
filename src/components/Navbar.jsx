import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <ul className="nav-list">
            <li>
                <NavLink
                    to="/home"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/data"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Data Collection
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/cleaning"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Data Cleaning
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/analysis"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Business Analysis
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/results"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Results
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;
