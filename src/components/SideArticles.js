import React from 'react';
import './SideArticles.css';
import SideArticle from './SideArticle'
import isisImg from '../assets/isis.jpg';
import climate from '../assets/climate.jpg';
import africa from '../assets/africa.jpg';
import { Link } from 'react-router-dom';

function SideArticles(props) {
    return (
        <div className="sideArticles">
            <h2 className="sectionLabel">{props.label}</h2>
            <Link className="routerLink" to="/isis">
                <SideArticle image={isisImg} title="The fall of the murderous caliphate" className="sideArticle" />
            </Link>

            <Link className="routerLink" to="/climate">
                <SideArticle image={climate} title="Climate Change: A human story of arrogance and the end of the world" />
            </Link>

            <Link className="routerLink" to='/africa'>
                <SideArticle image={africa} title="Alkebulan: The Forgotten Continent" />
            </Link>
        </div>
    );
}

export default SideArticles;