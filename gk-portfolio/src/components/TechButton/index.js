import React from 'react';
import './style.css';


// This is static top section of the page and gives it semantic value.
function TechButton({ name, link, svg, type }) {

    return (

        <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`tech-btn__btn`}
        >
            <img src={svg} alt={name} className={`tech-btn__icon`}/>
            {name}
        </a>



    )
}


export default TechButton;