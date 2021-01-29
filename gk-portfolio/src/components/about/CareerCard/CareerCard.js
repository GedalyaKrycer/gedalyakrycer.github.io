import React, { useEffect, useState } from 'react';
import './careerCard.css';


function CareerCard({ title, company, timeFrame, startDate, description, type }) {


    const [dateColor, setDateColor] = useState(null);
    const [metaColor, setMetaColor] = useState(null);

    useEffect(() => {
        switch (type) {
            case "dev":
                setDateColor("time-bar__start-date--dev");
                setMetaColor("cc__meta--dev");
                break;
            case "design":
                setDateColor("time-bar__start-date--design");
                setMetaColor("cc__meta--design");
                break;
            case "learning":
                setDateColor("time-bar__start-date--learn");
                setMetaColor("cc__meta--learn");
                break;
            default:
                setDateColor("time-bar__start-date--dev");
                setMetaColor("cc__meta--dev");

        }
    }, [type])





    return (
        <section className="careerCard">

            <div className="cc__card-wrapper">
                <div className="cc__main-content">
                    <h4 className="cc__title">{title}</h4>
                    <p className={`cc__meta ${metaColor}`}>{company}</p>
                    <p className={`cc__meta ${metaColor}`}>{timeFrame}</p>
                </div>

                <div className="cc__description">
                    <p className="cc__description-text">{description}</p>
                </div>

            </div>

            <div className="cc__vertical-spacer"></div>
            <div className="time-bar">
                <p className={`time-bar__start-date ${dateColor}`}>
                    {startDate}
                </p>
                <div className="time-bar__spacer"></div>
            </div>
        </section>
    )
}


export default CareerCard;