import React, { useEffect, useRef } from "react";
import './favoriteThings.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import favThings from '../../../utils/about-fav-things.json';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function FavoriteThings() {

    // Ref for Fav Things Section Title
    const favThingsSection = useRef(null);




    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles(favThingsSection.current);

        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: favThingsSection.current,
                toggleActions: 'play none none reverse',
                start: 'top bottom',
                end: '-=50'
            }
        });

        gsap.fromTo(favThingsSection.current, {

            autoAlpha: 0,
            y: 150,

        }, {
            scrollTrigger: {
                trigger: favThingsSection.current,
                start: "top bottom",
                end: "-=50",
                scrub: true
            },
            autoAlpha: 1,
            y: 0
        });

    }, []);

    const populatedCards = []

    favThings.forEach((e) => {
        populatedCards.push(
            <div className="fav__card" key={e.id}>
                <img className="fav__card-img" src={e.img} alt={`${e.name}`} />
                <h4 className="fav__card-title">{e.name}</h4>
                <div className="fav__hidden-text">
                    <p>{e.things}</p>
                </div>
            </div>
        )
    })




    return (
        <section ref={favThingsSection}>
            <div className="fav__section-container">

                <h3 className="fav__section-title">Things I enjoy when not coding…</h3>
                <div className="fav__cards-wrapper">
                    {populatedCards}

                </div>

            </div>

        </section>
    )
}


export default FavoriteThings;