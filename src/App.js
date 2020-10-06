import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navigation from './components/UI/Navbar'
import ProjectsList from './components/Projects/ProjectsList/ProjectsList';
import projects from './data/projects.json'
import Footer from './components/UI/Footer'


class App extends Component {

  state = {
    projects
  }

  render () {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Home />
          <AboutMe />
          <ProjectsList projects={this.state.projects} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
