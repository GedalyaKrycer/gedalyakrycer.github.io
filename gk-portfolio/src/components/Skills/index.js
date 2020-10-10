import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tech from '../../tech.json';

// This is static top section of the page and gives it semantic value.
function Skills() {

    // console.log(tech[0].fav[0].name);

    return (
        <section>
            <Container className="g__about-sections">
                <h2>Skills</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col lg={8}>
                        <p className="skills__intro-text">These are some of the tools I enjoy creating with or am currently learning.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={8} className="skills__tech-container">
                    <h3 className="skills__tech-title">Coming Soon</h3>
                    {/* {tech.map(technology => (
                        <DevProjectCard
                            key={tech[0].fav.technology.id}
                            name={tech[0].fav.technology.name}
                            link={tech[0].fav.technology.link}
                            svg={tech[0].fav.technology.svg}
                            
                        />
                    ))} */}
                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Skills;