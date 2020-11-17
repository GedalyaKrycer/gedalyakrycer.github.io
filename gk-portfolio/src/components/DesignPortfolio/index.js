import React, { useRef } from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DesignProjectCard from '../../components/DesignProjectCard';
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


// This is static top section of the page and gives it semantic value.
function DevPortfolio() {


    // Ref for title pin border
    const designTitleRef = useRef(null);


    // Save Initial Styles
    // ScrollTrigger.saveStyles("h2");


    // GSAP ANIMATIONS
    // useEffect(() => {


    // const tl = gsap.timeline();

    // // Media Query Animation
    // ScrollTrigger.matchMedia({

    //     "(min-width: 768px)": function () {

    //         tl.from(designTitleRef.current, {
    //             duration: 1,
    //             autoAlpha: 0,
    //             y: -100,
    //             scrollTrigger: {
    //                 trigger: designTitleRef.current,
    //                 start: 'top bottom',
    //                 end: '-=50',
    //                 scrub: true,
    //                 toggleActions: 'play none none reverse'
    //             }
    //         })

    //         // Kill animations 
    //         return function () {
    //             tl.kill();
    //         };
    //     }


    // });

    // }, [])

    return (
        <section className="design-portfolio__section">
            <Container>
                <h2 ref={designTitleRef}>Design</h2>

                <Row className="justify-content-around g_negative-margin">
                    <DesignProjectCard />
                </Row>

            </Container>

        </section>
    )
}


export default DevPortfolio;