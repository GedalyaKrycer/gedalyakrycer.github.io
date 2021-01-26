import React, { useEffect, useRef } from "react";
import './articleThumbnailContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { gsap } from "gsap";
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail';


// This is static top section of the page and gives it semantic value.
function ArticleThumbnailContainer() {


    // Ref for title pin border
    // const devTitleRef = useRef(null);

    // GSAP ANIMATIONS
    // useEffect(() => {

    //     gsap.fromTo(
    //         devTitleRef.current,
    //         {
    //             autoAlpha: 0,
    //             y: 50
    //         },
    //         {
    //             autoAlpha: 1,
    //             y: 0,
    //             ease: "expo",
    //             delay: 1
    //         });


    // }, [])


    return (
        <section className="articleThumbnailContainer">
            <Container>

                <div className="atc__row">
                    <ArticleThumbnail />
                    <ArticleThumbnail />
                    <ArticleThumbnail />
                    <ArticleThumbnail />
                    <ArticleThumbnail />
                    <ArticleThumbnail />
                </div>

            </Container>

        </section>
    )
}


export default ArticleThumbnailContainer;