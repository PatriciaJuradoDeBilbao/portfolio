import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import HeadShake from 'react-reveal/HeadShake';


const ProjectCard = props => { 
    const code = <FontAwesomeIcon icon={faCode} color="#353334" size="lg" />
    const laptop = <FontAwesomeIcon icon={faLaptop} color="#353334" size="lg" />
    
    return (
        <Col lg={4} md={6}>
            <HeadShake>
                <Card className="card">
                    <div className="card-img-wrapper">
                            <img className="card-img-top" src={props.image} alt={props.name} />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">{props.name}</h1>
                        <Card.Text className="project-tech">{props.tech}</Card.Text>
                        <div className="card-content">
                            <Card.Text className="project-description card-text">{props.description}</Card.Text>
                            <div className="links-container">
                                <ul className="links">
                                    <li><a href={props.github} title="Ver repositorio" target="blank">{code}</a></li>
                                    <li><a href={props.url} title="Ver web" target="blank">{laptop}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </Card>
            </HeadShake>
        </Col>
    )
}

export default ProjectCard