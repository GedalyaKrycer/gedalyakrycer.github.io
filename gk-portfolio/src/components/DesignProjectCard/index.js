import React from 'react';
import './style.css';
import { FaArrowRight } from 'react-icons/fa';


// This is static top section of the page and gives it semantic value.
function DesignPortfolio() {



    return (
        <div className="design-project__container ">
            <a href="http://gedalya.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <div className="g_card-slide  design-project__card-slide">
                    <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/react/gk-portfolio/public/assets/images/img-links/portfolio/motion-design-web.gif" alt="Design animations" className="g_project-img" />
                </div>

                <div className="g_meta-container design-project__meta-container">

                    <h4 className="design-project__text">View Design Projects</h4>
                    <FaArrowRight className="design-project__icon" />
                </div>
            </a>
        </div>

    )
}


export default DesignPortfolio;