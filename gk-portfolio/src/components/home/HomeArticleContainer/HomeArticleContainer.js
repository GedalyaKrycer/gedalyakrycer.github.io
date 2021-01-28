import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import './homeArticleContainer.css';
import Container from 'react-bootstrap/Container';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArticleThumbnail from '../../articles/ArticleThumbnail/ArticleThumbnail';
import axios from 'axios';


// This is static top section of the page and gives it semantic value.
function HomeArticleContainer() {

    // Local State
    const [articles, setArticles] = useState();


    // React Router
    const history = useHistory();

    // Ref for Article Section
    const articleSection = useRef(null);

    // GSAP ANIMATIONS
    useEffect(() => {

        // Save Initial Styles
        ScrollTrigger.saveStyles(articleSection.current);

        gsap.fromTo(articleSection.current, {

            autoAlpha: 0,
            y: 150,

        }, {
            scrollTrigger: {
                trigger: articleSection.current,
                start: "top bottom",
                end: "-=50",
                scrub: true
            },
            autoAlpha: 1,
            y: 0
        });

    }, []);

    const handleViewArticles = () => {
        history.push('/articles');
    }


    useEffect(() => {

        console.log("[HOME] Api Ran");

        axios.get('https://dev.to/api/articles?username=gedalyakrycer&per_page=6')
            .then(res => {
                // console.log(res.data);
                setArticles(res.data);
            })
            .catch(error => {
                console.log(error)
            })

        return () => {

        }

    }, [])


    return (
        <section
            ref={articleSection}
            className="articleThumbnailContainer">
            <button
                className="atc__article-btn"
                onClick={handleViewArticles}
            >
                <span className="atc__btn-cta">View</span>
                <span className="atc__btn-article">Dev Articles</span>
                <svg
                    className="atc__btn-icon"
                    viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.82658 1.04605L4.27251 0.523167C4.46133 0.301767 4.76666 0.301767 4.95347 0.523167L8.85839 5.09957C9.0472 5.32097 9.0472 5.67898 8.85839 5.89802L4.95347 10.4768C4.76465 10.6982 4.45932 10.6982 4.27251 10.4768L3.82658 9.9539C3.63576 9.73014 3.63977 9.36507 3.83462 9.14602L6.25511 6.44211H0.482089C0.214931 6.44211 0 6.19009 0 5.87683L0 5.12312C0 4.80986 0.214931 4.55784 0.482089 4.55784H6.25511L3.83462 1.85393C3.63776 1.63488 3.63375 1.26981 3.82658 1.04605Z" />
                </svg>
            </button>
            <Container>

                <div className="atc__row">

                    {articles && articles.map((article) => {

                        console.log('MAP RAN')

                        // Create Date
                        let date = new Date(article.published_at);
                        const day = date.getDate()
                        const month = date.getMonth() + 1;
                        let year = date.getFullYear().toString().split("").slice(2, 4).join("");

                        return <ArticleThumbnail
                            key={article.id}
                            url={article.url}
                            img={article.cover_image}
                            title={article.title}
                            reactions={article.positive_reactions_count}
                            tag={article.tag_list.slice(0, 1)}
                            date={`${month}/${day}/${year}`}



                        />
                    })}

                </div>

            </Container>

        </section>
    )
}


export default HomeArticleContainer;