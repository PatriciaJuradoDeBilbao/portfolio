import React, { useState, useEffect } from 'react'
import './ProjectsList.css'
import ProjectCard from '../ProjectCard'
import Row from 'react-bootstrap/Row'
import Fade from 'react-reveal/Fade'



const ProjectsList = props => {

    const [project, setProject] = useState([])
  
    useEffect(() => {
      fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        setProject(data)
      })
    }, [])

    const allProjects = project.map(project => {
        return <ProjectCard key={project.id} {...project} />
    })

    return (
        <section className="projects">
            <Fade left duration={1500}>
                <h1 className="title">Proyectos</h1>
            </Fade>
            <Row className="cards row">
                {allProjects}
            </Row>
        </section>
    )
}

export default ProjectsList