import React, { useEffect, useRef } from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import favThings from '../../utils/about-fav-things.json';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function FavoriteThings() {

    // Ref for Fav Things Section Title
    const favThingsTitleRef = useRef(null);

    // Ref for Fav Things Section Title
    const favCardRef = useRef(null);





    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles(favThingsTitleRef.current);

        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: favThingsTitleRef.current,
                toggleActions: 'play none none reverse',
                start: 'top 70%',
                end: '-=50'
            }
        });

        animateIn.fromTo([
            favThingsTitleRef.current,
            favCardRef.current
        ], {

            autoAlpha: 0,
            y: 200,
            ease: 'power4.out'

        }, {
            duration: 3,
            autoAlpha: 1,
            y: 0,
            ease: 'power4.out',
            stagger: .3
        });

    }, []);

    const populatedCards = []

    favThings.forEach((e) => {
        populatedCards.push(
            <Col lg={3} key={e.id}>

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
            <Container className="fav__section-container">

                <h3 className="fav__section-title" ref={favThingsTitleRef}>Things I enjoy when not coding…</h3>
                <Row className="justify-content-md-center" ref={favCardRef}>
                    {populatedCards}

                </Row>

            </Container>

        </section>
    )
}


export default FavoriteThings;