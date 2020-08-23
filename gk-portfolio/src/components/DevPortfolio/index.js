import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DevProjectCard from '../../components/DevProjectCard';

// This is static top section of the page and gives it semantic value.
function DevPortfolio() {
    return (
        <section>
            <Container>
                <h2>Dev Work</h2>

                <Row className="justify-content-md-around negative-margin">
                   
                        <DevProjectCard />
           
               
                </Row>

            </Container>

        </section>
    )
}


export default DevPortfolio;