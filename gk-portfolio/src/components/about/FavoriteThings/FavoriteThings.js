import React from "react";
import './favoriteThings.css';
import favThings from '../../../utils/about-fav-things.json';


function FavoriteThings() {

    const populatedCards = []

    favThings.forEach((e) => {
        populatedCards.push(
            <div className="fav__card" key={e.id}>
                <img className="fav__card-img" src={e.img} alt={`${e.name}`} />
                <h4 className="fav__card-title">{e.name}</h4>
                <div className="fav__hidden-text">
                    <p>{e.things}</p>
                </div>
            </div>
        )
    })




    return (
        <section>
            <div className="fav__section-container">

                <h3 className="fav__section-title">Things I enjoy when not coding…</h3>
                <div className="fav__cards-wrapper">
                    {populatedCards}

                </div>

            </div>

        </section>
    )
}


export default FavoriteThings;