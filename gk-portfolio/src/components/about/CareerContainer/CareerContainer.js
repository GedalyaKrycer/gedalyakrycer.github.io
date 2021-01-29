import React, { useState, useEffect, useRef } from 'react';
import './careerContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import careerHistory from '../../../utils/careerHistory.json';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function CareerContainer() {

    // State to hold which buttons to show
    // const [techArray, setTechArray] = useState(tech);





    // Helper function to make setting the active states DRYer
    // const activeSelector = (selector) => {
    //     switch (selector) {
    //         case "dev":
    //             setDevFilterActive(true);
    //             setDesignFilterActive(false);
    //             setLearnFilterActive(false);
    //             break;
    //         case "design":
    //             setDevFilterActive(false);
    //             setDesignFilterActive(true);
    //             setLearnFilterActive(false);
    //             break;
    //         case "learn":
    //             setDevFilterActive(false);
    //             setDesignFilterActive(false);
    //             setLearnFilterActive(true);
    //             break;
    //         default:
    //             setDevFilterActive(false);
    //             setDesignFilterActive(false);
    //             setLearnFilterActive(false);
    //     }
    // }










    // Ref for Tech Title
    const careerTitleRef = useRef(null);

    // Ref for Lead Text
    const introTxtRef = useRef(null);

    // Ref for Tech Buttons
    const timelineRef = useRef(null);



    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles([
            careerTitleRef.current,
            introTxtRef.current,
            timelineRef.current
        ]);


        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: careerTitleRef.current,
                toggleActions: 'play none none none',
                start: 'bottom bottom',
                end: '-=50'
            }
        });

        animateIn.fromTo(careerTitleRef.current, {
            autoAlpha: 0,
            y: 100
        },
            {
                autoAlpha: 1,
                y: 0,
                ease: "expo.out"
            })

        animateIn.fromTo(introTxtRef.current, {
            autoAlpha: 0,
            y: 0

        },
            {
                autoAlpha: 1,
                y: -20,
                ease: "expo.out"
            }

        );

        animateIn.fromTo(timelineRef.current, {
            autoAlpha: 0,
            y: 0

        },
            {
                autoAlpha: 1,
                y: -20,
                ease: "expo.out"
            }

        );

    }, []);


    return (
        <section>
            <Container className="g__about-sections">
                <h2 ref={careerTitleRef}>Career</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col lg={8}>
                        <p className="techContainer__intro-text g__body-lg"
                            ref={introTxtRef}
                        >Here is what I have been up to in <span className="g_secondary-blue-color">Development</span>, <span className="g_secondary-design-color">Design</span> and <span className="g_secondary-learn-color">Education</span>.</p>
                    </Col>
                </Row>
                <Row
                    ref={timelineRef}
                    className="justify-content-md-center"
                >
                    <Col
                        lg={12} className="techContainer__tech-wrapper"
                    >





                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default CareerContainer;