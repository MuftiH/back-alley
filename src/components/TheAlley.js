import React from 'react';
import './TheAlley.css';
import SideArticle from './SideArticle';
import isisImg from '../assets/isis.jpg';
import pr from '../assets/pr.jpg';
import mideast from '../assets/middleeast.jpg';
import slave from '../assets/slave.jpg'
import {
    Link
} from "react-router-dom";



function TheAlley(props) {

    return (
        <div className="sideArticles main subsection">
            <h2 className="sectionLabel">THE ALLEY</h2>
            <Link className="routerLink" to="/isis">
                <SideArticle image={isisImg} title="The fall of the murderous caliphate" className="sideArticle" />
            </Link>

            <Link className="routerLink" to='/puertorico'>
                <SideArticle image={pr} title="We have forgotten the Puerto Rican people" />
            </Link>


            <Link className="routerLink" to='/middle-east'>
                <SideArticle image={mideast} title="God and Greed in the Middle East" />
            </Link>

            <Link className="routerLink" to='/slavery'>
                <SideArticle image={slave} title="Slavery has far from ended" />
            </Link>

            <p className="bottomSpace">(More info on what's down The Alley is coming)</p>
        </div>
    );
}

export default TheAlley;