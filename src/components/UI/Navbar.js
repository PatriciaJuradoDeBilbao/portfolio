import React from 'react'
import './Navbar.css'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Twitter from '../../assets/twitter.png'
import Mail from '../../assets/gmail.png'


const Navigation = () => {

    return (
        <header>
                <nav>
                    <ul className="navbar">
                        <li><a href="mailto:patriciajdebilbao@gmai.com" title="patriciajdebilbao@gmail.com" target="blank" > <img className="icon" src={Mail} alt="Linkedin icon" /> </a> </li>
                        <li><a href="https://www.linkedin.com/in/patriciajdebilbao/" title="Linkedin" target="blank"><img className="icon" src={Linkedin} alt="Linkedin icon"/></a></li>
                        <li><a href="https://github.com/PatriciaJuradoDeBilbao" title="Github" target="blank"><img className="icon" src={Github} alt="Github icon"/></a></li>
                        <li><a href="https://twitter.com/Patylla" title="Twitter" target="blank"><img className="icon" src={Twitter} alt="Twitter icon"/></a></li>
                    </ul>
                </nav>

        </header>
    )
}

export default Navigation