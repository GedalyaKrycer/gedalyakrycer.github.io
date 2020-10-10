import React, { useState, useEffect } from 'react';
import './style.css';


function TechFilter() {

  const filterActive = false;

  return (

    <div className="tech-filter__container">
      <div className="tech-filter__nav">
        <button className={`tech-filter__nav-dev ${filterActive ? "tech-filter__nav-dev--active" : null}`}>
          Development
        </button>
        <button className={`tech-filter__nav-design ${filterActive ? "tech-filter__nav-design--active": null}`}>
          Design
        </button>
        <button className={`tech-filter__nav-learn ${filterActive ? "tech-filter__nav-learn--active" : null}`}>
          Learning
        </button>
      </div>
    </div>



  )
}


export default TechFilter;