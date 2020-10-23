import React from 'react'
import './ProjectsList.css'
import ProjectCard from '../ProjectCard'
import Row from 'react-bootstrap/Row'
import Fade from 'react-reveal/Fade'



const ProjectsList = props => {
    const projects = props.projects.map((project, index) => {
        return (
            <ProjectCard key={index} id={project.id} name={project.name} description={project.description} image={project.image} github={project.github} url={project.url} tech={project.tech}/>   
    )
})

    return (
        <section className="projects">
            <Fade left duration={1500}>
                <h1 className="title">Proyectos</h1>
            </Fade>
            <Row className="cards row">
                {projects}
            </Row>
        </section>
    )
}

export default ProjectsList