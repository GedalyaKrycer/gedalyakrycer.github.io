import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import favThings from '../../utils/about-fav-things.json';


function FavoriteThings() {

    const populatedCards = []

    favThings.forEach((e) => {
        populatedCards.push(
            <Col lg={3} id={e.id}>

                <div className="fav__card-container">
                    <img className="fav__card-img" src={e.img} alt={`${e.name}`} />
                    <h4 className="fav__card-title">{e.name}</h4>
                    <div className="fav__hidden-text">
                        <p>{e.things}</p>
                    </div>
                </div>



            </Col>
        )
    })


    return (
        <section>
            <Container>

                <h3 className="fav__section-title">Things I enjoy when not coding…</h3>
                <Row className="justify-content-md-center">
                    {populatedCards}

                </Row>

            </Container>

        </section>
    )
}


export default FavoriteThings;