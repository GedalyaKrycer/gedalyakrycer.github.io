import React, { useEffect, useRef } from 'react';
import './style.css';
import { gsap } from "gsap";



function ContactPin() {



    // Ref for contact link
    const contactContainerRef = useRef(null);

    useEffect(() => {

        // GSAP ANIMATIONS
        const tl = gsap.timeline();

        tl.from(contactContainerRef.current, {
            duration: 1,
            autoAlpha: 0,
            x: 20,
            ease: 'back.out(2)',
            delay: 1.3
        })


    }, [])

    return (
        <div className="contactPin" ref={contactContainerRef}>
            <a
                href="/about#contact"
                className="contactPin__link"
            >
                Contact
            </a>


        </div>
    )
}


export default ContactPin;