import React, { useRef } from "react";
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function Bio() {

    // Ref for Bio Title
    const bioTitleRef = useRef(null);

    // Ref for Lead Text
    const leadTxtRef = useRef(null);

    // Ref for Paragraph Text 1 
    const pTxt1Ref = useRef(null);

    // Ref for Paragraph Text 2
    const pTxt2Ref = useRef(null);

    // Ref for Paragraph Text 3
    const pTxt3Ref = useRef(null);

    // Ref for Paragraph Text 4
    const pTxt4Ref = useRef(null);

  
    // Save Initial Styles
    // ScrollTrigger.saveStyles(".g__body-lg");


    // GSAP ANIMATIONS
    // useEffect(() => {

    //     console.log(`
    //     top————
    //     bioTitleRef: ${bioTitleRef},
    //     leadTxtRef: ${leadTxtRef},
    //     pTxt1Ref: ${pTxt1Ref},
    //     pTxt2Ref: ${pTxt2Ref},
    //     pTxt3Ref: ${pTxt3Ref},
    //     pTxt4Ref: ${pTxt4Ref},
    //     `);


    // const tl = gsap.timeline();
     

    //     ScrollTrigger.matchMedia({

    //         "(min-width: 768px)": function () {

    //             tl.from(bioTitleRef.current, {
    //                 duration: 1,
    //                 autoAlpha: 0,
    //                 y: 50,
    //                 ease: "expo.out",
    //                 delay: 1
    //             })
        
    //             tl.from(leadTxtRef.current, {
    //                 duration: 1,
    //                 autoAlpha: 0,
    //                 y: -30,
    //                 ease: 'power4.out',
    //                 stagger: .1
        
    //             }, '-=1');

    //             tl.from([
    //                 pTxt1Ref.current,
    //                 pTxt2Ref.current,
    //                 pTxt3Ref.current,
    //                 pTxt4Ref.current,
    //             ], {
    //                 scrollTrigger: {
    //                     trigger: pTxt1Ref.current,
    //                     toggleActions: 'play none none none',
    //                     start: 'top bottom',
    //                     end: '-=50',
    //                     scrub: true
    //                 },
    //                 duration: 1,
    //                 autoAlpha: 0,
    //                 y: 150,
    //                 ease: 'power4.out',
    //                 stagger: .1

    //             });

    //             // Kill animations 
    //             return function () {
    //                 tl.kill();
    //             };
    //          },

    //          "(max-width: 767px)": function () {

    //             tl.from([
    //                 leadTxtRef.current,
    //                 pTxt1Ref.current,
    //                 pTxt2Ref.current,
    //                 pTxt3Ref.current,
    //                 pTxt4Ref.current,
    //             ], {
    //                 duration: 1,
    //                 autoAlpha: 0,
    //                 y: 150,
    //                 ease: 'power4.out',
    //                 stagger: .1

    //             }, '-=.8');

    //             // Kill animations 
    //             return function () {
    //                 tl.kill();
    //             };
    //          }

    //     });

    //     console.log(`
    //     bottom————
    //     bioTitleRef: ${bioTitleRef},
    //     leadTxtRef: ${leadTxtRef},
    //     pTxt1Ref: ${pTxt1Ref},
    //     pTxt2Ref: ${pTxt2Ref},
    //     pTxt3Ref: ${pTxt3Ref},
    //     pTxt4Ref: ${pTxt4Ref},
    //     `);

    // }, []);


    return (
        <section>
            <Container>
                <h2 ref={bioTitleRef}>Bio</h2>

                <Row className="justify-content-md-center g_negative-margin">
                    <Col className="g_white-color" lg={8}>
                        <p className="g__body-lg" ref={leadTxtRef}>
                            Hi there! I am a Vegas-based front-end developer and creative, who obsesses over the details and loves learning new technologies. 
                            
                        </p>
                         <p ref={pTxt1Ref}>   
                            (I also obsess over movies and enjoy everything from superhero blockbusters to romcoms.)
                        </p>
                        <p ref={pTxt2Ref}>
                                I recently left my agency job as a Digital Design Director to follow my true passion—building websites from the ground up.
                        </p>
                        <p ref={pTxt3Ref}>
                                In September of 2020, I earned a certification in Full Stack Development, from the University of Arizona's 6 month coding bootcamp. It's a joy to not only design a great site, but code it into reality as well.
                        </p>

                         <p ref={pTxt4Ref}>
                                With this deeper understanding of how to build quality sites, I look forward to changing careers to web development, built on a strong design foundation.
                        </p>

                
                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Bio;