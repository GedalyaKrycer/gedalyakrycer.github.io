import React, { useState, useEffect } from 'react';
import './techButton.css';


// This is static top section of the page and gives it semantic value.
function TechButton({ name, link, svg, type }) {

    // State to determine the css class type
    const [classType, setClassType ] = useState("");

    useEffect(() => {
      if(type === "dev") {
        setClassType("tech-btn__btn--dev");
      } else if (type === "design") {
        setClassType("tech-btn__btn--design");
      } else {
        setClassType("tech-btn__btn--learn")
      }
    }, [type])



    return (

        <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`tech-btn__btn ${classType}`}
        >
            <img src={svg} alt={name} className={`tech-btn__icon`} />
            {name}
        </a>



    )
}


export default TechButton;
