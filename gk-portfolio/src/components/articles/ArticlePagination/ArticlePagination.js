import React from "react";
import './articlePagination.css';



// This is static top section of the page and gives it semantic value.
function ArticlePagination({ oldContentAvailable, newContentAvailable, nextPage, prevPage }) {



    return (
        <div className="articlePagination">
            <button
                aria-label="Pagination Button Previous"
                className="ap__btn"
                onClick={prevPage}
                disabled={!newContentAvailable}
            >
                <svg
                    className="ap__icon"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.02401 7.46477L3.67718 7.87146C3.53032 8.04366 3.29285 8.04366 3.14755 7.87146L0.110388 4.31204C-0.0364704 4.13984 -0.0364704 3.86138 0.110388 3.69102L3.14755 0.12976C3.29441 -0.0424404 3.53188 -0.0424404 3.67718 0.12976L4.02401 0.536447C4.17243 0.710479 4.16931 0.994427 4.01776 1.1648L2.13516 3.26784L6.62529 3.26784C6.83308 3.26784 7.00024 3.46386 7.00024 3.7075V4.29372C7.00024 4.53736 6.83308 4.73338 6.62529 4.73338L2.13516 4.73338L4.01776 6.83642C4.17087 7.00679 4.174 7.29074 4.02401 7.46477Z" />
                </svg>

            </button>

            <button
                aria-label="Pagination Button Next"
                className="ap__btn"
                onClick={nextPage}
                disabled={!oldContentAvailable}
            >

                <svg
                    className="ap__icon"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.97647 0.536447L3.32331 0.129761C3.47017 -0.0424398 3.70764 -0.0424398 3.85294 0.129761L6.8901 3.68918C7.03696 3.86138 7.03696 4.13984 6.8901 4.31021L3.85294 7.87146C3.70608 8.04366 3.46861 8.04366 3.32331 7.87146L2.97647 7.46477C2.82805 7.29074 2.83118 7.00679 2.98272 6.83642L4.86533 4.73338L0.375202 4.73338C0.167413 4.73338 0.000244141 4.53736 0.000244141 4.29372L0.000244141 3.7075C0.000244141 3.46386 0.167413 3.26784 0.375202 3.26784L4.86533 3.26784L2.98272 1.1648C2.82962 0.994428 2.82649 0.71048 2.97647 0.536447Z" />
                </svg>

            </button>
        </div>

    )
}


export default ArticlePagination;