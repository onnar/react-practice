import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav() {
    return(
        <>
            <nav className="top-nav">
                <ul>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie">Movie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data">Data</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default TopNav;