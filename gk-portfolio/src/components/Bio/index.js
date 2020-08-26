import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This is static top section of the page and gives it semantic value.
function Bio() {
    return (
        <section>
            <Container>
                <h2>Bio</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col className="g_white-color" lg={8}>
                        <p>
                            I am a Vegas-based front-end developer and creative. I obsess over the details and love learning new technologies. (I also obsess over movies and love everything from superhero blockbusters to romcoms.)
                        </p>
                        <p>
                            I recently left my agency job as a Digital Design Director to follow my true passion—building websites from the ground up.
                        </p>
                        <p>
                            I am attending the University of Arizona's Coding Bootcamp, for certification in Full Stack Development.

                        </p>
                        <p>
                            With this deeper understanding of how to build quality sites, I look forward to changing careers to web development, built on a strong design foundation.
                        </p>
                    </Col>
                </Row>
                
            </Container>

        </section>
    )
}


export default Bio;