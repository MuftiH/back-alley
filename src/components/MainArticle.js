import React from 'react';
import './MainArticle.css';

function MainArticle(props) {
    return (
        <div className="mainArticle">
            <img alt="article" src={props.image} width={props.width}>

            </img>
            <h2 className="articleTitle">
                {props.title}
            </h2>
            <p className="authorName">
                WRITTEN BY {props.author}
            </p>
        </div>
    );
}

export default MainArticle;
