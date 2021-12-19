import React, { useEffect, useRef } from 'react';
import './designProjectCard.css';
import { FaArrowRight } from 'react-icons/fa';
import videoMp4 from '../../../motion-design-web.mp4';
import videoWebp from '../../../motion-design-web.webp';
import figmaThumbnail from '../../../figma-thumbnail.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// This is static top section of the page and gives it semantic value.
function DesignPortfolio() {

    // Ref for design card
    const designCard1Ref = useRef(null);

    // Ref for design card
    const designCard2Ref = useRef(null);


    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles([designCard1Ref.current, designCard2Ref.current]);


        gsap.from(designCard1Ref.current, {
            scrollTrigger: {
                trigger: designCard1Ref.current,
                toggleActions: 'play none none none',
                start: 'top bottom',
                // end: '-=100',
                scrub: true
            },
            // duration: 2,
            autoAlpha: 0,
            y: 100,
            scale: .8,
            ease: 'power4.out'

        });

        gsap.from(designCard2Ref.current, {
            scrollTrigger: {
                trigger: designCard2Ref.current,
                toggleActions: 'play none none none',
                start: 'top bottom',
                // end: '-=100',
                scrub: true
            },
            // duration: 2,
            autoAlpha: 0,
            y: 100,
            scale: .8,
            ease: 'power4.out'
        });


    }, [])





    return (
        <>
            <div className="design-project__container" ref={designCard1Ref}>
                <a href="https://www.behance.net/gedalyakrycer"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <div className="g__design-project__card-slide">
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="design-project__project-img">
                            <source src={videoWebp} type="video/webm" />
                            <source src={videoMp4} type="video/mp4" />
                        </video>
                    </div>

                    <div className="design-project__meta-container">

                        <h4 className="design-project__text">View design projects</h4>
                        <FaArrowRight className="design-project__icon" />
                    </div>
                </a>
            </div>
            <div className="design-project__container" ref={designCard2Ref}>
                <a href="https://youtu.be/7nmarPXV2OQ"
                    target="_blank"
                    rel="noopener noreferrer" >
                    <div className="g__design-project__card-slide">
                        <img src={figmaThumbnail} alt="From a Figment to Figma." className="design-project__project-img" />

                    </div>

                    <div className="design-project__meta-container">

                        <h4 className="design-project__text">Watch my workshop</h4>
                        <FaArrowRight className="design-project__icon" />
                    </div>
                </a>
            </div>
        </>

    )
}


export default DesignPortfolio;