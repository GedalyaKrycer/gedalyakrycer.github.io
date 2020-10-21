import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DevProjectCard from '../../components/DevProjectCard';
import projects from '../../utils/projects.json';

// This is static top section of the page and gives it semantic value.
function DevPortfolio() {
    return (
        <section>
            <Container>
                <h2>Dev Work</h2>

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