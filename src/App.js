import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navigation from './components/UI/Navbar'


class App extends Component {
  
  state = {

  }

  render () {
    return (
      <div className="App">
        <main>
        <Navigation />
          <Home />
          <AboutMe />
        </main>
      </div>
    );
  }
}

export default App;
