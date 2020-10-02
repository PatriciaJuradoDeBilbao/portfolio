import React from 'react'
import './ProjectsList.css'
import ProjectCard from '../ProjectCard'
import Row from 'react-bootstrap/Row'


const ProjectsList = props => {
    const projects = props.projects.map((project, index) => {
        return (
            <ProjectCard key={index} id={project.id} name={project.name} description={project.description} image={project.image} github={project.github} url={project.url} tech={project.tech}/>   
    )
})

    return (
        <section className="projects">
            <h1 className="title">Proyectos</h1>
        <Row as="div" className="cards">
            {projects}
        </Row>
        </section>
    )
}

export default ProjectsList