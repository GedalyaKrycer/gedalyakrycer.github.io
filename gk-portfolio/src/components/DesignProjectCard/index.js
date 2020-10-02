import React from 'react';
import './style.css';
import { FaArrowRight } from 'react-icons/fa';
import videoMp4 from '../../motion-design-web.mp4';
import videoWebp from '../../motion-design-web.webp';
import figmaThumbnail from '../../figma-thumbnail.jpg';


// This is static top section of the page and gives it semantic value.
function DesignPortfolio() {



    return (
        <>
        <div className="design-project__container ">
            <a href="http://gedalya.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <div className="g__design-project__card-slide">
                    <video autoPlay={true} loop={true} muted={true} playsInline={true} className="design-project__project-img">
                        <source src={videoWebp} type="video/webm" />
                        <source src={videoMp4} type="video/mp4" />
                    </video>
                </div>

                <div className="design-project__meta-container">

                    <h4 className="design-project__text">View Design Projects</h4>
                    <FaArrowRight className="design-project__icon" />
                </div>
            </a>
        </div>
        <div className="design-project__container ">
            <a href="https://youtu.be/7nmarPXV2OQ"
                target="_blank"
                rel="noopener noreferrer" >
                <div className="g__design-project__card-slide">
                    <img src={figmaThumbnail} alt="From a Figment to Figma." className="design-project__project-img" />
                   
                </div>

                <div className="design-project__meta-container">

                    <h4 className="design-project__text">Watch my workshop</h4>
                    <FaArrowRight className="design-project__icon" />
                </div>
            </a>
        </div>
        </>

    )
}


export default DesignPortfolio;