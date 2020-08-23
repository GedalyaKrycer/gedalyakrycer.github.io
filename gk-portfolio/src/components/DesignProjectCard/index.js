import React from 'react';
import './style.css';
import { FaArrowRight } from 'react-icons/fa';


// This is static top section of the page and gives it semantic value.
function DevProjectCard() {



    return (
        <div className="design-projects-container">
            <a href="http://gedalya.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer" >
            <div className="cardSlide designCardSlide">
                <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/react/gk-portfolio/public/assets/images/img-links/portfolio/motion-design-web.gif" alt="Design animations" className="projet-img" />
            </div>

            <div className="meta-container white-color design__contain">

                <h4 className="design__text">View Design Projects</h4>
                <FaArrowRight className="design__icon" />

            </div>

        </a>
        </div>
        
    )
}


export default DevProjectCard;