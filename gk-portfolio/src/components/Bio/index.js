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
                        <p className="g__body-lg">
                            Hi there! I am a Vegas-based front-end developer and creative, who obsesses over the details and loves learning new technologies. 
                            
                        </p>
                         <p>   
                            (I also obsess over movies and enjoy everything from superhero blockbusters to romcoms.)
                        </p>
                        <p>
                                I recently left my agency job as a Digital Design Director to follow my true passion—building websites from the ground up.
                        </p>
                        <p>
                                In September of 2020, I earned a certification in Full Stack Development, from the University of Arizona's 6 month coding bootcamp. It's a joy to not only design a great site, but code it into reality as well.
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