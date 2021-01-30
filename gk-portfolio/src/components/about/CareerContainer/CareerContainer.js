import React, { useEffect, useRef } from 'react';
import './careerContainer.css';
import careerHistory from '../../../utils/careerHistory.json';
import CareerCard from '../CareerCard/CareerCard';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollContainer from 'react-indiana-drag-scroll';
gsap.registerPlugin(ScrollTrigger);




function CareerContainer() {

    // Ref for Tech Title
    const careerTitleRef = useRef(null);

    // Ref for Lead Text
    const introTxtRef = useRef(null);

    // Ref for Tech Buttons
    const timelineRef = useRef(null);



    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles([
            careerTitleRef.current,
            introTxtRef.current,
            timelineRef.current
        ]);


        let animateIn = gsap.timeline({
            scrollTrigger: {
                trigger: careerTitleRef.current,
                toggleActions: 'play none none none',
                start: 'bottom bottom',
                end: '-=50'
            }
        });

        animateIn.fromTo(careerTitleRef.current, {
            autoAlpha: 0,
            y: 100
        },
            {
                autoAlpha: 1,
                y: 0,
                ease: "expo.out"
            })

        animateIn.fromTo(introTxtRef.current, {
            autoAlpha: 0,
            y: 0

        },
            {
                autoAlpha: 1,
                y: -20,
                ease: "expo.out"
            }

        );

        animateIn.fromTo(timelineRef.current, {
            autoAlpha: 0,
            y: 0

        },
            {
                autoAlpha: 1,
                y: -20,
                ease: "expo.out"
            }

        );

    }, []);


    return (
        <section className="g__about-sections">
            <h2 ref={careerTitleRef}>Career</h2>

            <div
                className="g_negative-margin cc__intro-wrapper"
                ref={introTxtRef}
            >
                <p className="cc__intro-text g__body-lg">Here is what I have been up to in <span className="cc__intro-text--dev">Development</span>, <span className="cc__intro-text--design">Design</span> and <span className="cc__intro-text--learn">Education</span>.</p>

            </div>
            <div
                ref={timelineRef}
                className="cc__timeline-wrapper">
                <ScrollContainer className="cc__overflow" >

                    <div className="cc__buffer"></div>
                    {careerHistory && careerHistory.map((card, index) => {
                        return <CareerCard
                            key={index + card.title}
                            title={card.title}
                            company={card.company}
                            timeFrame={card.time_frame}
                            startDate={card.start_date}
                            description={card.description}
                            type={card.type}
                        />
                    })}
                    <div className="cc__buffer"></div>

                </ScrollContainer>
            </div>

        </section>
    )
}


export default CareerContainer;