import React from 'react';
import MainArticle from './MainArticle';
import SideArticles from './SideArticles';
import ImagePanel from './ImagePanel';
import './App.css';
import mainImg from '../assets/girl1.jpg';
import art2 from '../assets/art2.jpg';
import art1 from '../assets/art1.jpg';
import nature1 from '../assets/nature1.jpg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <div className="main">
        <div className="mainSection">
          <Link className="routerLink imageLink" to='/beauty'>
          <MainArticle image={mainImg} width="800" title="The descent and deviation of individual beauty" author="HM" />
          </Link>
          
          <ImagePanel img1={art2} img2={art1} img3={nature1}/>
        </div>

        <SideArticles label="THE LATEST ARTICLES"/>

      </div>
    </div>

  );
}

export default Home;
