import React from 'react'
import './Home.css'


const Home = () => {
    return (
        <section className="header">
            <div className="hero">
                    <div>
                        <img className="hero-img" src='https://res.cloudinary.com/drhetggfq/image/upload/v1600805570/ilustracion_paty.jpg' alt="Ilustración mujer"/>
                    </div>
                <div className="header-text">
                        <h1 className="header-title">Patricia Jurado De Bilbao</h1>
                        <h3 className="header-subtitle">Junior Fullstack Developer</h3>
                </div>
            </div>
        </section>
    )
}


export default Home
