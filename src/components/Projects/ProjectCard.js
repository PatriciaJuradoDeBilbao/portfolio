import React from 'react'
import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'


const ProjectCard = props => { 

    const code = <FontAwesomeIcon icon={faCode} color="#353334" size="lg" />
    const laptop = <FontAwesomeIcon icon={faLaptop} color="#353334" size="lg" />
    
    return (
        <>
            <div className="project-container">
                <div className="icon-container">
                    <img className="project-icon" src={props.image} alt="Icon" />
                </div>
                <h2 className="project-title">{props.name}</h2>
                <div className="project-content">
                    <p className="project-tech">{props.tech}</p>
                    <p className="project-description">{props.description.es}</p>
                    <div className="links-container">
                        <ul className="links">
                            <li><a href={props.github} title="Ver repositorio" target="blank">{code}</a></li>
                            <li><a href={props.url} title="Ver web" target="blank">{laptop}</a></li>
                        </ul>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ProjectCard