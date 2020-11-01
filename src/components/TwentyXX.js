import React from 'react';
import SideArticle from './SideArticle';
import girl1 from '../assets/girl1.jpg';
import { Link } from 'react-router-dom';



function TwentyXX(props) {
    return (
        <div className="sideArticles main subsection">
            <h2 className="sectionLabel">20XX</h2>
            <Link className="routerLink" to="/beauty">
                <SideArticle image={girl1} title="The Descent and deviation of individual beauty" />
            </Link>
            <p className="bottomSpace">(More articles are coming soon! 😋)</p>


        </div>
    );
}

export default TwentyXX;