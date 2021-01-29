import React, { useEffect, useRef, useState } from "react";
import './mainArticleContainer.css';
import Container from 'react-bootstrap/Container';
import { gsap } from "gsap";
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail';
import ArticlePagination from '../ArticlePagination/ArticlePagination';
import axios from 'axios';


// This is static top section of the page and gives it semantic value.
function MainArticleContainer() {

    // Local State
    const [articles, setArticles] = useState([]);
    const [apiError, setApiError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [oldContentAvailable, setOldContentAvailable] = useState(true);
    const [newContentAvailable, setNewContentAvailable] = useState(false);

    // Ref for Article Section
    const articleSection = useRef(null);

    // // GSAP ANIMATIONS
    useEffect(() => {


        gsap.fromTo(articleSection.current, {
            autoAlpha: 0,
            y: 50
        },
            {
                autoAlpha: 1,
                y: 0,
                ease: "expo",
                delay: 1
            });

    }, []);


    useEffect(() => {
        apiCall(1);

        // if (articles) {
        //     setOldContentAvailable(true);
        // } else {
        //     setOldContentAvailable(false);
        // }

        if (currentPage > 1) {
            setNewContentAvailable(true);
        } else {
            setNewContentAvailable(false);
        }

        console.log(currentPage)
    }, [currentPage])

    useEffect(() => {
        if (articles.length === 0) {
            setOldContentAvailable(false);
        } else {
            setOldContentAvailable(true);
        }
    }, [articles])

    const apiCall = () => {

        console.log("[ARTICLES] Api Ran");

        axios.get(`https://dev.to/api/articles?username=gedalyakrycer&per_page=3&page=${currentPage}`)
            .then(res => {
                console.log(res.data);
                setArticles(res.data);
            })
            .catch(error => {
                console.log(error);
                setApiError(error);
            })
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1)
    }


    return (
        <section
            ref={articleSection}
            className="mainThumbnailContainer">
            <Container>

                {!apiError ?
                    (
                        <>
                            <div className="mtc__row">

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



                        </>)
                    : <p>{apiError}</p>
                }

                {articles.length === 0 ? <p>No More Articles</p> : null}

                <ArticlePagination
                    oldContentAvailable={oldContentAvailable}
                    newContentAvailable={newContentAvailable}
                    nextPage={handleNextPage}
                    prevPage={handlePrevPage}
                />


            </Container>

        </section>
    )
}


export default MainArticleContainer;