import React, { useRef } from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DevProjectCard from '../../components/DevProjectCard';
import projects from '../../utils/projects.json';
// import { gsap } from "gsap";


// This is static top section of the page and gives it semantic value.
function DevPortfolio() {



    // Ref for title pin border
    const devTitleRef = useRef(null);

    // GSAP ANIMATIONS
    // useEffect(() => {

    // const tl = gsap.timeline();

    // tl.from(devTitleRef.current, {
    //     duration: 1,
    //     autoAlpha: 0,
    //     y: 50,
    //     ease: "expo.out",
    //     delay: 1
    // })


    // }, [])


    return (
        <section>
            <Container>
                <h2 ref={devTitleRef}>Dev Work</h2>

                <Row className="justify-content-around g_negative-margin">

                    {projects.map(project => (
                        <DevProjectCard
                            key={project.id}
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