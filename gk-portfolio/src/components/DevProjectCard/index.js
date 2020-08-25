import React, { useState } from 'react';
import './style.css';
import { FaGithub, FaDesktop } from 'react-icons/fa';


// This is static top section of the page and gives it semantic value.
function DevProjectCard({ img, title, tech, deployLink, repoLink }) {

    const [cardSlide, setCardSlide] = useState(false);

    const cardSlider = () => !cardSlide ? setCardSlide(true) : setCardSlide(false);

    return (
        <div className="projects-container">
            <a tabindex="0" className={`cardSlide ${cardSlide ? "cardSlideUp" : ""}`} onClick={cardSlider}>
                <img src={img} alt={title} className="project-img" />
            </a>

            <div className="meta-container white-color">
                <div className="project-links">
                    <a href={deployLink}
                        target="_blank"
                        rel="noopener noreferrer" className="button">
                        <FaDesktop />
                        <h5>View Deployed</h5>
                    </a>
                    <a href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer" className="button">
                        <FaGithub />
                        <h5>View Repo</h5>
                    </a>
                </div>
                <div>
                    <h4>{title}</h4>
                    <h5>{tech}</h5>
                </div>
            </div>

        </div>
    )
}


export default DevProjectCard;
