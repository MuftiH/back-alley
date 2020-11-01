import React from 'react';
import SideArticle from './SideArticle';
import africa from '../assets/africa.jpg';
import afghanistan from '../assets/afghanistan.jpg';
import { Link } from 'react-router-dom';



function Politics(props) {
    return (
        <div className="sideArticles main subsection">
            <h2 className="sectionLabel">POLITICS</h2>
            <Link className="routerLink" to='/africa'>
                <SideArticle image={africa} title="Alkebulan: The Forgotten Continent" />
            </Link>

            <Link className="routerLink" to='/aghanistan'>
                <SideArticle image={afghanistan} title="A brief history of aghanistan" />
            </Link>
            <p className="bottomSpace">(More on politics is sure to come!)</p>
        </div>
    );
}

export default Politics;