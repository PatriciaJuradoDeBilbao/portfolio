import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const ProjectCard = props => { 
    const code = <FontAwesomeIcon icon={faCode} color="#353334" size="lg" />
    const laptop = <FontAwesomeIcon icon={faLaptop} color="#353334" size="lg" />
    
    return (
        <Col lg={4} md={6}>
            <Card className="card">
                    <Card.Title as="h1" className="project-title">{props.name}</Card.Title>
                    <Card.Text className="project-tech">{props.tech}</Card.Text>
                    <Card.Text className="project-description">{props.description}</Card.Text>
                    <div className="links-container">
                        <ul className="links">
                            <li><a href={props.github} title="Ver repositorio" target="blank">{code}</a></li>
                            <li><a href={props.url} title="Ver web" target="blank">{laptop}</a></li>
                        </ul>
                    </div>
            </Card>
        </Col>
    )
}

export default ProjectCard