import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Index from './Components/index';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render(){

    return (
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Route exact path='/' component={Index}/>
            <Route path='/contact' component={Contact} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
