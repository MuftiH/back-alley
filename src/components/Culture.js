import React from 'react';
import SideArticle from './SideArticle';
import climate from '../assets/climate.jpg';
import { Link } from 'react-router-dom';



function Culture(props) {
    return (
        <div className="sideArticles main subsection">
            <h2 className="sectionLabel">CULTURE</h2>
            <Link className="routerLink" to="/climate">
                <SideArticle image={climate} title="Climate Change: A human story of arrogance and the end of the world" />
            </Link>
            <p className="bottomSpace">(More on culture is coming!)</p>



        </div>
    );
}

export default Culture;