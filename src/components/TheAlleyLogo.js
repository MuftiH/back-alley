import React from 'react';
import './TheAlleyLogo.css';
import { Link } from 'react-router-dom';

function TheAlleyLogo(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="logoAlley">
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                <h1 className="logo">Back<br />Alley</h1>
            </Link>

        </div>

    );
}

export default TheAlleyLogo;