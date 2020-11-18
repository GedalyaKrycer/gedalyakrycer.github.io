import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import { FaGithub, FaDesktop } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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



// Dev Project Component.
// ==================================================================
function DevProjectCard({ img, title, tech, deployLink, repoLink }) {


    // Styles tech text to be separates words in pill shapes
    const techStyler = []
    const styledTech = tech.split(", ")
    styledTech.forEach(element => {
        techStyler.push(<h5 key={uuidv4()} className="dev-project__tech ">{element}</h5>)

    });




    // Ref for title pin border
    const devCardsRef = useRef(null);


    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles(devCardsRef.current);

        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: devCardsRef.current,
                start: 'top bottom',
                end: '-=50',
                scrub: true,
                toggleActions: 'play none none reverse'
            }
        });


        // Media Query Animation
        ScrollTrigger.matchMedia({

            "(min-width: 768px)": function () {
                animateIn.clear();

                animateIn.from(devCardsRef.current, {
                    duration: 2,
                    opacity: 0,
                    y: 100,
                    scale: .8,
                    ease: 'power4.out'
                });


                // Kill animations 
                return function () {
                    animateIn.kill();
                };
            },

            "(max-width: 767px)": function () {
                animateIn.clear();

                animateIn.from(devCardsRef.current, {
                    delay: 1.2,
                    duration: 2,
                    opacity: 0,
                    y: 100,
                    scale: .8,
                    ease: 'power4.out'
                });


                // Kill animations 
                return function () {
                    animateIn.kill();
                };
            }


        });

    }, [])



    return (
        <div className="g_projects-container" ref={devCardsRef}>
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
                                        rel="noopener noreferrer" className={!repoLink ?
                                            "dev-project__button dev-project__button--full" : "dev-project__button dev-project__button--half"}>
                                        <FaDesktop />
                                        <h5>View Deployed</h5>
                                    </a>}

                                    {!repoLink ? null : <a href={repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer" className={!deployLink ?
                                            "dev-project__button dev-project__button--full" : "dev-project__button dev-project__button--half"}>
                                        <FaGithub />
                                        <h5>View Repo</h5>
                                    </a>}
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
