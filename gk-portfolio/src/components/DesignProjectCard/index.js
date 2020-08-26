import React from 'react';
import './style.css';
import { FaArrowRight } from 'react-icons/fa';
import videoMp4 from '../../motion-design-web.mp4';
import videoWebp from '../../motion-design-web.webp';


// This is static top section of the page and gives it semantic value.
function DesignPortfolio() {



    return (
        <div className="design-project__container ">
            <a href="http://gedalya.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <div className="g_card-slide  design-project__card-slide">
                    <video autoplay="true" loop="true" muted="true" playsInline="true" className="design-project__project-img">
                        <source src={videoWebp} type="video/webm" />
                        <source src={videoMp4} type="video/mp4" />
                    </video>
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