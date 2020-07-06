import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
		<div className="nav-container">
			
		
            <h3>Links</h3>
            <ul className="nav-links">
                <Link className="navLink" to="/">
                    <li>Home</li>
                </Link>
                <Link className="navLink" to="/create">
                    <li>Create</li>
                </Link>
            </ul>
		
		</div>
		
        </nav>
    );
}

export default Nav;