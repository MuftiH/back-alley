import React from 'react';
import SideArticle from './SideArticle';
import drone from '../assets/drone.jpg';
import { Link } from 'react-router-dom';



function Tech(props) {
    return (
        <div className="sideArticles main subsection">
            <h2 className="sectionLabel">TECH</h2>
            <Link className="routerLink" to="/drones">
                <SideArticle image={drone} title="The Ones Who Pay for War" />
            </Link>


            <p className="bottomSpace">(Deeper explorations on the role of technology in our world are being written right now!)</p>
        </div>
    );
}

export default Tech;