import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navigation from './components/UI/Navbar'
import ProjectsList from './components/Projects/ProjectsList/ProjectsList';
import projects from './data/projects.json'


class App extends Component {

  state = {
    projects
  }

  render () {
    return (
      <div className="App">
        <main>
        <Navigation />
          <Home />
          <AboutMe />
          <ProjectsList projects={this.state.projects} />
        </main>
      </div>
    );
  }
}

export default App;
