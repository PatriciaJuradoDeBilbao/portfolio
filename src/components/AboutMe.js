import React from 'react'
import './AboutMe.css'
import CV from '../files/CV - Patricia Jurado De Bilbao_EN.pdf'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'


const AboutMe = () => {
    return (
        <section className="about-container">
            <Fade left duration={1500}>
                <h3 className="about-title">Sobre mi</h3>
            </Fade>
            <Slide bottom duration={2000}>
                <article className="about">
                    <p className="about-text">Decidí aprender a programar en mi tiempo libre y de inmediato supe que me encantaba así que tome la decisión de formarme en Ironhack y darle un giro a mi vida profesional.</p>
                    <p className="about-text">Me considero una persona empática gracias a mi experiencia de cara al público, creativa, colaborativa y siempre en búsqueda de superación.</p>  
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