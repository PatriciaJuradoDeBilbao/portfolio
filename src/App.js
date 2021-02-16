import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navigation from './components/UI/Navbar'
import ProjectsList from './components/Projects/ProjectsList/ProjectsList';
import Footer from './components/UI/Footer'

const App = () => {


  return (
    <div className="App" >
        <header>
          <Navigation />
        </header>
        <main>
          <Home />
          <AboutMe />
          <ProjectsList />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App