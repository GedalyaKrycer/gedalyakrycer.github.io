import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This is static top section of the page and gives it semantic value.
function FavoriteThings() {
    return (
        <section>
            <Container>

                    <h3 className="fav__section-title">Things I enjoy when not coding…</h3>
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        
                         <div className="fav__card-container">
                             <img className="fav__card-img" src="" alt="Volunteering as a CG tech"/>
                             <h4 className="fav__card-title">Volunteering</h4>
                             <div className="fav__hidden-text">
                                 <p>Test</p>
                             </div>
                         </div>
                       

                
                    </Col>
                    
                </Row>

            </Container>

        </section>
    )
}


export default FavoriteThings;