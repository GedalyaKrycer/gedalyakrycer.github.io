import React, { useState } from 'react';
import './style.css';
import { FaGithub, FaDesktop } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function CustomToggle({ children, eventKey }) {


    const [cardSlide, setCardSlide] = useState(false);


    // Expands Accordion and Reveals Thumbnail
    // ==================================================================
    const decoratedOnClick = useAccordionToggle(eventKey, () => {
        !cardSlide ? setCardSlide(true) : setCardSlide(false);
    });

    return (
        <button
            onClick={decoratedOnClick}
            className={`g_card-slide ${cardSlide ? "g_card-slide-up" : ""}`}
        >
            {children}
        </button>
    );
}



// This is static top section of the page and gives it semantic value.
// ==================================================================
function DevProjectCard({ img, title, tech, deployLink, repoLink }) {


    // Styles tech text to be separates words in pill shapes
    const techStyler = []
    const styledTech = tech.split(", ")
    styledTech.forEach(element => {
        techStyler.push(<h5 key={uuidv4()} className="dev-project__tech ">{element}</h5>)

    });



    return (
        <div className="g_projects-container">
            <Accordion>
                <Card>
                    <div className="neumorphism">
                        <CustomToggle eventKey="0">


                            <img src={img} alt={title} className="g_project-img" />
                        </CustomToggle>
                    </div>
                    <div className="g_meta-container dev-project__meta-container">


                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <h4 className="dev-project__title">{title}</h4>



                                <div className="dev-project__links">
                                    {!deployLink ? null : <a href={deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer" className="dev-project__button dev-project__button--half">
                                        <FaDesktop />
                                        <h5>View Deployed</h5>
                                    </a>}

                                    <a href={repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer" className={!deployLink ?
                                            "dev-project__button dev-project__button--full" : "dev-project__button dev-project__button--half"}>
                                        <FaGithub />
                                        <h5>View Repo</h5>
                                    </a>
                                </div>

                                <div className="dev-project__info">
                                    {techStyler}
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </div>


                </Card>

            </Accordion>







        </div>


    )
}


export default DevProjectCard;
