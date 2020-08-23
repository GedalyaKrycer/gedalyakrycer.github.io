import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DesignProjectCard from '../../components/DesignProjectCard';


// This is static top section of the page and gives it semantic value.
function DevPortfolio() {
    return (
        <section className="section-margin">
            <Container>
                <h2>Design</h2>

                <Row className="justify-content-around negative-margin">
                    <DesignProjectCard />
                </Row>

            </Container>

        </section>
    )
}


export default DevPortfolio;