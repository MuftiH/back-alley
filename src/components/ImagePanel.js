import React from 'react';
import './ImagePanel.css';


function ImagePanel(props) {
    return (
        <div className="imagePanel">
            <img alt="" src={props.img1}>
            </img>

            <img alt="" src={props.img2}>
            </img>

            <img alt="" src={props.img3}>
            </img>
        </div>

    );
}

export default ImagePanel;