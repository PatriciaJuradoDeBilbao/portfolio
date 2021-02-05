import React, { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navigation from './components/UI/Navbar'
import ProjectsList from './components/Projects/ProjectsList/ProjectsList';
// import projects from './data/projects.json'
import Footer from './components/UI/Footer'

const App = () => {

  const [project, setProject] = useState([])
  
  useEffect(() => {
    fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProject(data)
    })
  }, [])

  return (
    <div className="App" >
        <header>
          <Navigation />
        </header>
        <main>
          <Home />
          <AboutMe />
          <ProjectsList projects={project} />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App