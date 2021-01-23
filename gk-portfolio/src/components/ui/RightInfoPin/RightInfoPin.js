import React, { useEffect, useRef } from 'react';
import './rightInfoPin.css';
import { gsap } from "gsap";
import resumeFile from "../../../gedalya-krycer-resume.pdf";



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
            <a
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                href={resumeFile}
                className="rightInfoPin__link"
            >
                Resume
            </a>


        </div>
    )
}


export default RightInfoPin;