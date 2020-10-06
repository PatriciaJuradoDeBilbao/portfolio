import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo_patylla.png'


const Footer = () => {

    return (
        <section className="footer">
        <div >
            <ul className="links-footer">
                <li><a href="https://www.linkedin.com/in/patriciajdebilbao/" title="Linkedin" target="blank">Linkedin</a></li>
                <li><a href="https://github.com/PatriciaJuradoDeBilbao" title="Github" target="blank">Github</a></li>
                <li><a href="https://twitter.com/Patylla" title="Twitter" target="blank">Twitter</a></li>
            </ul>
        </div>
        <div className="made-by">
            <img src={Logo} alt="Patylla logo"/>
        <h5> &copy; 2020</h5>
        </div>
        
        <div className="custom-shape-divider-top-1600872471">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
        </section>
    )
}

export default Footer