import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevProjectCard from '../../components/DevProjectCard';

// This is static top section of the page and gives it semantic value.
function DevPortfolio() {
    return (
        <section>
            <Container>
                <h2>Dev Work</h2>

                <Row className="justify-content-md-center negative-margin">
                    <Col lg={8}>
                        <DevProjectCard />
                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default DevPortfolio;