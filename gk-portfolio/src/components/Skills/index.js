import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import TechButton from '../TechButton';
import TechFilter from '../TechFilter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tech from '../../utils/tech.json';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Skills() {

    // State to hold which buttons to show
    const [techArray, setTechArray] = useState(tech);

    // State that determines if a filter has been clicked
    const [devFilterActive, setDevFilterActive] = useState(false);
    const [designFilterActive, setDesignFilterActive] = useState(false);
    const [learnFilterActive, setLearnFilterActive] = useState(false);



    // Helper function to make setting the active states DRYer
    const activeSelector = (selector) => {
        switch (selector) {
            case "dev":
                setDevFilterActive(true);
                setDesignFilterActive(false);
                setLearnFilterActive(false);
                break;
            case "design":
                setDevFilterActive(false);
                setDesignFilterActive(true);
                setLearnFilterActive(false);
                break;
            case "learn":
                setDevFilterActive(false);
                setDesignFilterActive(false);
                setLearnFilterActive(true);
                break;
            default:
                setDevFilterActive(false);
                setDesignFilterActive(false);
                setLearnFilterActive(false);
        }
    }


    // Function to show just the developer tool buttons
    const handleDevFilter = () => {

        // Checks if nav is already active 
        if (devFilterActive === false) {

            // Sets Dev State to Active and turns the other's off
            activeSelector("dev")

            // Filters out all buttons excepts the dev type
            setTechArray([...tech].filter(techType =>
                techType.type.includes("dev")
            ))

        } else {

            // Replaces array with the original selection of buttons
            setTechArray(tech);

            // Removes active styling
            setDevFilterActive(false);
        }
    }



    // Function to show just the Design tool buttons
    const handleDesignFilter = () => {

        // Checks if nav is already active 
        if (designFilterActive === false) {

            // Sets Design State to Active and turns the other's off
            activeSelector("design")

            // Filters out all buttons excepts the design type
            setTechArray([...tech].filter(techType =>
                techType.type.includes("design")
            ))

        } else {

            // Replaces array with the original selection of buttons
            setTechArray(tech);

            // Removes active styling
            setDesignFilterActive(false);
        }
    }



    // Function to show just the Learn tool buttons
    const handleLearnFilter = () => {

        // Checks if nav is already active 
        if (learnFilterActive === false) {

            // // Sets Learn State to Active and turns the other's off
            activeSelector("learn")


            // Filters out all buttons excepts the learn type
            setTechArray([...tech].filter(techType =>
                techType.type.includes("learn")
            ))

        } else {

            // Replaces array with the original selection of buttons
            setTechArray(tech);

            // Removes active styling
            setLearnFilterActive(false);
        }
    }


    // Ref for Skill Title
    const skillTitleRef = useRef(null);

    // Ref for Lead Text
    const introTxtRef = useRef(null);



    // GSAP ANIMATIONS
    const tl = gsap.timeline();

    // Save Initial Styles
    ScrollTrigger.saveStyles("h2 .skills__intro-text .skills__tech-container");


    useEffect(() => {


        ScrollTrigger.matchMedia({

            "(min-width: 768px)": function () {

                tl.from(skillTitleRef.current, {
                    duration: 1,
                    autoAlpha: 0,
                    y: 50,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: skillTitleRef.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        end: '-=50',
                        scrub: true
                    },
                })

                tl.from(introTxtRef.current, {
                    duration: 1,
                    autoAlpha: 0,
                    y: -30,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: introTxtRef.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        end: '-=50',
                        scrub: true
                    },

                });



                // Kill animations 
                return function () {
                    tl.kill();
                };
            }
        });

    }, [tl]);


    return (
        <section>
            <Container className="g__about-sections">
                <h2 ref={skillTitleRef}>Skills</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col lg={8}>
                        <p className="skills__intro-text g__body-lg"
                            ref={introTxtRef}>These are some of the tools I use on projects or currently learning.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12} className="skills__tech-container" >

                        <TechFilter
                            devFilterActive={devFilterActive}
                            designFilterActive={designFilterActive}
                            learnFilterActive={learnFilterActive}
                            handleDevFilter={handleDevFilter}
                            handleDesignFilter={handleDesignFilter}
                            handleLearnFilter={handleLearnFilter}

                        />

                        <div className="skills__tech-btn-container" >
                            {techArray.map(technology => (
                                <TechButton
                                    key={technology.name}
                                    name={technology.name}
                                    link={technology.link}
                                    svg={technology.svg}
                                    type={technology.type}


                                />
                            ))}
                        </div>

                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Skills;