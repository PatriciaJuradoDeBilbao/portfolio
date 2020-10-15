import React from 'react'
import './AboutMe.css'
import CV from '../files/CV - Patricia Jurado De Bilbao_EN.pdf'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
    const heart = <FontAwesomeIcon icon={faHeart} color="#db8282" size="sm" />

    return (
        <section className="about-container">
            <Fade left duration={1500}>
                <h3 className="about-title">Sobre mi</h3>
            </Fade>
            <Slide bottom duration={2000}>
                <article className="about">

                    <p className="about-text">En mi tiempo libre me propuse aprender a programar y me gustó tanto que decidí de formarme en <b>Ironhack</b>. </p>
                    <p className="about-text">Venezolana viviendo en Madrid hace 3 años. Buscando mi primera experiencia como programadora.</p>  
                    <div className="outer">
                        <h1 className="rotating-text">{heart} &nbsp;
                            <div className="inner">
                                <span>
                                    ir de ruta en moto<br />
                                    mis gatitos Link y Ganon<br />
                                    ver pelis y series<br />
                                    música a todo volumen
                                </span>
                            </div>
                        </h1>
                    </div>
                    <div className="CV-container">
                        <a className="download-button" download="CV Patricia Jurado De Bilbao" href={CV}>Descargar CV</a>
                    </div>
                </article>
                <article>
                </article>
            </Slide>
                    <div className="custom-shape-divider-bottom-1600697593">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
        </section>

        
    )
}

export default AboutMe