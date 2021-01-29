import React from "react";
import './articlePagination.css';



// This is static top section of the page and gives it semantic value.
function ArticlePagination({ oldContentAvailable, newContentAvailable, nextPage, prevPage }) {



    return (
        <div className="articlePagination">
            <button
                className="ap__btn"
                onClick={prevPage}
                disabled={!newContentAvailable}
            >Prev</button>
            <button
                className="ap__btn"
                onClick={nextPage}
                disabled={!oldContentAvailable}
            >Next</button>
        </div>

    )
}


export default ArticlePagination;