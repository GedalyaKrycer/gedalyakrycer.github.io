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



    // Checks if there are Newer posts available 
    useEffect(() => {
        // Calls first page from API on initial load
        apiCall();

        if (currentPage > 1) {
            setNewContentAvailable(true);
        } else {
            setNewContentAvailable(false);
        }
    }, [currentPage])

    // Checks if there are older posts available 
    useEffect(() => {
        if (articles.length === 0) {
            setOldContentAvailable(false);
        } else {
            setOldContentAvailable(true);
        }
    }, [articles])


    // Calls Dev.To Api
    const apiCall = () => {

        axios.get(`https://dev.to/api/articles?username=gedalyakrycer&per_page=9&page=${currentPage}`)
            .then(res => {
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

                                {articles.length === 0 ? (
                                    <div className="mtc__article-end">
                                        <h3>Thank you for reading!</h3>
                                        <p>This is the end of the available articles. You can cycle back below for more recent ones.</p>
                                    </div>
                                ) : null}

                                {articles && articles.map((article) => {

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