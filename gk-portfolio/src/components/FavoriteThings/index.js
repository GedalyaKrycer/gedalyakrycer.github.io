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
    const tl = gsap.timeline();

    // Save Initial Styles
    ScrollTrigger.saveStyles(".fav__section-title");

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 768px)": function () {

                tl.from([
                    favThingsTitleRef.current,
                    favCardRef.current
                ], {
                    scrollTrigger: {
                        trigger: favThingsTitleRef.current,
                        toggleActions: 'play none none none',
                        start: 'top bottom',
                        end: '-=50',
                        scrub: true
                    },
                    duration: 2,
                    autoAlpha: 0,
                    y: 100,
                    ease: 'power4.out',
                    stagger: .3

                });

                // Kill animations 
                return function () {
                    tl.kill();
                };
            }

        });

    }, [tl]);

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
            <Container>

                <h3 className="fav__section-title" ref={favThingsTitleRef}>Things I enjoy when not coding…</h3>
                <Row className="justify-content-md-center" ref={favCardRef}>
                    {populatedCards}

                </Row>

            </Container>

        </section>
    )
}


export default FavoriteThings;