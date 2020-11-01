import React from 'react';
import './SideArticle.css';

function SideArticle(props) {
    return (
        <div className="sideArticle imageLink">
            <img alt="" src={props.image} width={props.width}>
            </img>
            
            <h3 className="articleTitle">
                {props.title}
            </h3>
        </div>
    );
}

export default SideArticle;