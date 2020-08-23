import React, { useState } from 'react';
import './style.css';
import { FaGithub, FaDesktop } from 'react-icons/fa';


// This is static top section of the page and gives it semantic value.
function DevProjectCard() {

    const [cardSlide, setCardSlide] = useState(false);

    const cardSlider = () => !cardSlide ? setCardSlide(true) : setCardSlide(false);

    return (
        <div className="projects-container">
            <button className={`cardSlide ${cardSlide ? "cardSlideUp" : ""}`} onClick={cardSlider}>
                <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/react/gk-portfolio/public/assets/images/img-links/portfolio/Card/directory-thumbnail.jpg" alt="Name" className="projet-img" />
            </button>

            <div className="meta-container white-color">
                <div className="project-links">
                    <a href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer" className="button">
                        <FaDesktop />
                        <h5>View Deployed</h5>
                    </a>
                    <a href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer" className="button">
                            <FaGithub />
                        <h5>View Repo</h5>
                    </a>
                </div>
                <div>
                    <h4>DigiBit Team Directory</h4>
                    <h5>React.js</h5>
                </div>
            </div>

        </div>
    )
}


export default DevProjectCard;