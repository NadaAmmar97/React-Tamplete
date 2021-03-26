import React, {Component} from 'react';

import Home from './../Home/Home';
import About from './../About/About';
import Footer from './../Footer/Footer';
import Portfolio from './../Portfolio/portfolio';
import Profile from './../Profile/Profile';
import SocialMedia from './../SocialMedia/SocialMedia';
import Work from './../Work/Work';

class Index extends Component {
  render(){

    return (
        <div className="App">
          <Home />
          <Work />
          <Portfolio />
          <Profile />
          <About />
          <SocialMedia/>
          <Footer /> 
      </div>
    );
  }
}

export default Index;
