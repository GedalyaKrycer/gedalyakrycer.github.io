import React, { useEffect, useRef } from 'react';
import './rightInfoPin.css';
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap";



function RightInfoPin() {



    // Ref for Right Info Pin link
    const rightInfoPinContainerRef = useRef(null);

    useEffect(() => {

        // GSAP ANIMATIONS
        const tl = gsap.timeline();

        tl.from(rightInfoPinContainerRef.current, {
            duration: 1,
            autoAlpha: 0,
            x: 20,
            ease: 'back.out(2)',
            delay: 1.3
        })


    }, [])

    return (
        <div className="rightInfoPin" ref={rightInfoPinContainerRef}>
            <Link
                to="/about#contact"
                className="rightInfoPin__link">
                Contact
            </Link>


        </div>
    )
}


export default RightInfoPin;