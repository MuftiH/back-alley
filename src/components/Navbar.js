import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <ul className="navbar">
            <Link style={{ textDecoration: 'inherit' }} to="/the-alley">
                <li>The Alley</li>
            </Link>

            <Link style={{ textDecoration: 'inherit' }} to="/culture">
                <li>Culture</li>
            </Link>

            <Link style={{ textDecoration: 'inherit' }} to="/tech">
                <li>Tech</li>
            </Link>

            <Link style={{ textDecoration: 'inherit' }} to="/music">
                <li>Music</li>
            </Link>

            <Link style={{ textDecoration: 'inherit' }} to="/politics">
                <li>Politics</li>
            </Link>

            <Link style={{ textDecoration: 'inherit' }} to="/20XX">
                <li>20XX</li>
            </Link>
        </ul>
    );
}

export default Navbar;