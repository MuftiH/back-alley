import React from 'react';
import './Article.css';



function Article(props) {
    return (
        <div className="article main">
            <h2>
                {props.articleTitle}
            </h2>
            <p className="author">
                Written by {props.authorName}
            </p>
            <img src={props.image} alt="">
            </img>
            <p className="articleBody">
                {props.articleBody}
            </p>
        </div>
    );
}

export default Article;