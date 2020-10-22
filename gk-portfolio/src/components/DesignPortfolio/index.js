import React, { useEffect, useRef } from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DesignProjectCard from '../../components/DesignProjectCard';
import { gsap } from "gsap";


// This is static top section of the page and gives it semantic value.
function DevPortfolio() {


    // Ref for title pin border
    const designTitleRef = useRef(null);


    useEffect(() => {

        gsap.from(designTitleRef.current, {
            duration: 1,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: designTitleRef.current,
                start: 'top bottom',
                end: '-=50',
                scrub: true,
                toggleActions: 'play none none reverse'
            }
        })

    }, [])

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