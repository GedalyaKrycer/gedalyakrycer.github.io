import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import './header.css';

// This is static top section of the page and gives it semantic value.
function Header({ title, subTitleOne, subTitleTwo }) {


    // Ref for blue line
    const ruleRef = useRef(null);

    // Ref for h1 line
    const h1Ref = useRef(null);

    // Ref for h3 line
    const h3Ref = useRef(null);


    // GSAP ANIMATIONS
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(ruleRef.current, {
            duration: .7,
            autoAlpha: 0,
            scale: 40,
            ease: 'back.out(1)'

        })
            .to(ruleRef.current, {
                duration: 1,
                width: 210,
                borderRadius: 0,
                ease: 'back.out(3)'
            })

        tl.from(h1Ref.current, {
            duration: 1,
            autoAlpha: 0,
            y: 20,
            ease: 'back.out(3)'
        }, '-=1')

        tl.from(h3Ref.current, {
            duration: 1,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(3)'
        }, '-=1')

    }, [])


    return (
        <header>
            <h1 className="g_white-color" ref={h1Ref}>{title}</h1>
            <hr ref={ruleRef} />
            <div ref={h3Ref}>
                <h3 className="header__sub-title">{subTitleOne}</h3>
                <h3 className="header__sub-title">{subTitleTwo}</h3>
            </div>

        </header>
    )
}


export default Header;