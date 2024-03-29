import React from "react";
import './bio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function Bio() {

    return (
        <section>
            <Container>
                <h2
                    id="bioTitle"
                >Bio</h2>

                <Row
                    className="bioContainer justify-content-md-center g_negative-margin"
                >
                    <Col className="g_white-color" lg={8}>
                        <p className="g__body-lg">
                            I am a Vegas-based front-end developer and designer who takes pride in perfecting the little details.
                        </p>
                        <p>
                            For over five years I have had the privilege to work remotely with a wonderful team at a design agency in Brooklyn, starting as an intern and concluding as a Digital Design Director.
                        </p>
                        <p>
                            It provided the opportunity to serve some great clients, including; <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.elsevier.com/"
                                className="bio__link">Elsevier</a>, <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://3dprint.com/"
                                    className="bio__link">3DPrint</a>, <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.onewtc.com/"
                                        className="bio__link">One World Trade Center</a>, <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://perfectbuilding.com/"
                                            className="bio__link">PBM</a>, and <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.budlight.com/"
                                                className="bio__link">Bud Light</a>.
                        </p>

                        <p>
                            In 2020 I decided to <s>change</s> expand my career to follow my true passion—building websites from the ground up as a front-end developer. I graduated from the University of Arizona's Coding Bootcamp, with a certification in Full-Stack Development.
                        </p>
                        <p>
                            These days I get the joy of building things with and writing about code.
                        </p>


                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Bio;
