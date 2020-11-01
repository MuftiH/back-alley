import React from 'react';
import Navbar from './Navbar';
import TheAlleyLogo from './TheAlleyLogo';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <TheAlleyLogo />
            </div>
            <Navbar />
        </div>
    );
}

export default Header;