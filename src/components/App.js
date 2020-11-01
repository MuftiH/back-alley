import React from 'react';
import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Home from './Home';
import TheAlley from './TheAlley';
import Culture from './Culture';
import Tech from './Tech';
import Music from './Music';
import Politics from './Politics';
import TwentyXX from './TwentyXX';
import IsisArticle from './Articles/IsisArticle';
import BeautyArticle from './Articles/BeautyArticle';
import PuertoRico from './Articles/PuertoRico';
import AfricaArticle from './Articles/AfricaArticle';
import ClimateChange from './Articles/ClimateChangeArticle';
import AfghanistanArticle from './Articles/AfghanistanArticle';
import MiddleEastArticle from './Articles/MiddleEastArticle';
import PakistanArticle from './Articles/PakistanArticle';
import SlaveryArticle from './Articles/SlaveryArticle';
import UyghurArticle from './Articles/UyghurArticle';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
// import MainArticle from './MainArticle';
// import SideArticles from './SideArticles';
// import Footer from './Footer';
// import ImagePanel from './ImagePanel';

// import mainImg from '../assets/girl2.jpg';
// import art2 from '../assets/art2.jpg';
// import art1 from '../assets/art1.jpg';
// import nature1 from '../assets/nature1.jpg';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/the-alley">
            <TheAlley />
          </Route>

          <Route path="/culture" component={Culture} />
          <Route path="/tech" component={Tech} />
          <Route path="/music" component={Music} />
          <Route path="/politics" component={Politics} />
          <Route path="/20XX" component={TwentyXX} />
          <Route path="/isis" component={IsisArticle} />
          <Route path="/beauty" component={BeautyArticle} />
          <Route path="/puertorico" component={PuertoRico} />
          <Route path="/africa" component={AfricaArticle} />
          <Route path="/climate" component={ClimateChange} />
          <Route path="/aghanistan" component={AfghanistanArticle} />
          <Route path="/middle-east" component={MiddleEastArticle} />
          <Route path="/drones" component={PakistanArticle} />
          <Route path="/slavery" component={SlaveryArticle} />
          <Route path="/uyghurs" component={UyghurArticle} />
        </Switch>
        <Footer />
      </div>
    </Router>



    // <div>
    //   <div className="main">
    //     <Header />
    //     <div className="mainSection">
    //       <MainArticle image={mainImg} width="800" title="Meet the most innovative models taking over Korea" author="HM" />
    //       <ImagePanel img1={art2} img2={art1} img3={nature1}/>
    //     </div>

    //     <SideArticles label="THE LATEST ARTICLES"/>

    //   </div>
    //   <Footer />
    // </div>

  );
}

export default App;
