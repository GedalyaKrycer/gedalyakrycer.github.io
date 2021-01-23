import React, { useEffect, useRef } from "react";
import './bio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function Bio() {

    // Ref for Bio Title
    const bioTitleRef = useRef(null);

    // Ref for Lead Text
    const txtContainerRef = useRef(null);

    // Ref for Lead Text
    const leadTxtRef = useRef(null);

    // Ref for Paragraph Text 1 
    const pTxt1Ref = useRef(null);

    // Ref for Paragraph Text 2
    const pTxt2Ref = useRef(null);

    // Ref for Paragraph Text 3
    const pTxt3Ref = useRef(null);

    // Ref for Paragraph Text 4
    const pTxt4Ref = useRef(null);




     // GSAP ANIMATIONS
    useEffect(() => {
        
        // Save Initial Styles
        ScrollTrigger.saveStyles([
            txtContainerRef.current,
            leadTxtRef.current,
            pTxt1Ref.current,
            pTxt2Ref.current,
            pTxt3Ref.current,
            pTxt4Ref.current
        ]);

        gsap.fromTo(
            bioTitleRef.current,
        {
            autoAlpha: 0,
            y: 50
        }, 
        {
            autoAlpha: 1,
            y: 0,
            ease: "expo",
            delay: 1
        });

        ScrollTrigger.matchMedia({

            // Full animation on desktop 
            "(min-width: 768px)": function () {


                gsap.fromTo(txtContainerRef.current, {
                    autoAlpha: 0,
                    y: 50,
                    ease: "expo"
                }, 
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: "expo"
                },
                1.5)


                gsap.from(
                [
                    leadTxtRef.current,
                    pTxt1Ref.current,
                    pTxt2Ref.current,
                    pTxt3Ref.current,
                    pTxt4Ref.current
                ],
                {
                    scrollTrigger: {
                        trigger: bioTitleRef.current,
                        start: "top center",
                        end: "-=50",
                        scrub: true
                    },
                    autoAlpha: 0,
                    y: 180,
                    stagger: 0.1
                }
                );

            },

            // Simplifies animation on mobile 
            "(max-width: 767px)": function () {

                gsap.from(
                [
                    txtContainerRef.current,
                    leadTxtRef.current,
                    pTxt1Ref.current,
                    pTxt2Ref.current,
                    pTxt3Ref.current,
                    pTxt4Ref.current
                ],
                {
                    duration: 1,
                    autoAlpha: 0,
                    y: 150,
                    ease: "power4",
                    stagger: 0.1
                }
                );

            }
        });
        
    }, []);

    return (
        <section>
            <Container>
                <h2 ref={bioTitleRef}>Bio</h2>

                <Row 
                    className="justify-content-md-center g_negative-margin"
                    ref={txtContainerRef}
                >
                    <Col className="g_white-color" lg={8}>
                        <p 
                        className="g__body-lg" 
                        ref={leadTxtRef}>
                            Hi there! I am a Vegas-based front-end developer and creative, who obsesses over the details and loves learning new technologies. 
                            
                        </p>
                         <p ref={pTxt1Ref}>   
                            (I also obsess over movies and enjoy everything from superhero blockbusters to romcoms.)
                        </p>
                        <p ref={pTxt2Ref}>
                                I recently left my agency job as a Digital Design Director to follow my true passion—building websites from the ground up.
                        </p>
                        <p ref={pTxt3Ref}>
                                In September of 2020, I earned a certification in Full Stack Development, from the University of Arizona's 6 month coding bootcamp. It's a joy to not only design a great site, but code it into reality as well.
                        </p>

                         <p ref={pTxt4Ref}>
                                With this deeper understanding of how to build quality sites, I look forward to changing careers to web development, built on a strong design foundation.
                        </p>

                
                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Bio;