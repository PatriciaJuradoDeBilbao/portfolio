import React from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'


const Home = () => {
    return (
        
        <section className="header">
            <div className="hero">
                <div>
                    <Fade top duration={2000}>
                        <img className="hero-img" src="https://res.cloudinary.com/drhetggfq/image/upload/v1602344577/let-me-choose/IMG_1976.jpg.jpg" alt="Ilustración Patricia Jurado"/>
                    </Fade>
                </div>
                <div className="header-text">
                    <Fade left duration={2000}>
                        <h1 className="header-title">Patricia Jurado De Bilbao</h1>
                    </Fade>
                    <Fade right duration={2000}>
                        <h3 className="header-subtitle">Junior Fullstack Developer</h3>
                    </Fade>
                </div>
            </div>
        </section>
    )
}


export default Home
