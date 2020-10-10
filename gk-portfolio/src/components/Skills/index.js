import React, { useState } from 'react';
import './style.css';
import TechButton from '../TechButton';
import TechFilter from '../TechFilter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tech from '../../tech.json';

function Skills() {

    // State to hold which buttons to show
    const [techArray, setTechArray] = useState(tech);

    // State that determines if a filter has been clicked
    const [devFilterActive, setDevFilterActive] = useState(false);
    const [designFilterActive, setDesignFilterActive] = useState(false);
    const [learnFilterActive, setLearnFilterActive] = useState(false);

    // Function to show just the developer tool buttons
    const handleDevFilter = () => {
        if (devFilterActive === false) {
            setTechArray([...techArray].filter(techType =>
                techType.type.includes("dev")
              ))
            
              setDevFilterActive(true);

        } else {
            setTechArray(tech);
            setDevFilterActive(false);
        }
    }

    // Function to show just the Design tool buttons
    const handleDesignFilter = () => {

    }

    // Function to show just the Learn tool buttons
    const handleLearnFilter = () => {

    }

    return (
        <section>
            <Container className="g__about-sections">
                <h2>Skills</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col lg={8}>
                        <p className="skills__intro-text">These are some of the tools I use on projects or currently learning.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12} className="skills__tech-container">

                        <TechFilter
                            devFilterActive={devFilterActive}
                            designFilterActive={designFilterActive}
                            learnFilterActive={learnFilterActive}
                            handleDevFilter={handleDevFilter}
                            handleDesignFilter={handleDesignFilter}
                            handleLearnFilter={handleLearnFilter}
                        />

                        <div className="skills__tech-btn-container">
                            {techArray.map(technology => (
                                <TechButton
                                    key={technology.id}
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