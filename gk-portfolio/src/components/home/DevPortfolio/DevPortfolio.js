import React, { useEffect, useRef } from "react";
import './devPortfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DevProjectCard from '../DevProjectCard/DevProjectCard';
import projects from '../../../utils/projects.json';
import { gsap } from "gsap";


// This is static top section of the page and gives it semantic value.
function DevPortfolio() {


    // Ref for title pin border
    const devTitleRef = useRef(null);

    // GSAP ANIMATIONS
    useEffect(() => {

        gsap.fromTo(
            devTitleRef.current,
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


    }, [])


    return (
        <section>
            <Container>
                <h2 ref={devTitleRef}>Coding</h2>

                <Row className="justify-content-around g_negative-margin">

                    {projects.map(project => (
                        <DevProjectCard
                            key={project.name + project.img}
                            img={project.img}
                            title={project.title}
                            tech={project.tech}
                            deployLink={project.deployLink}
                            repoLink={project.repoLink}
                        />
                    ))}

                </Row>

            </Container>

        </section>
    )
}


export default DevPortfolio;