import React from 'react';
import './techFilter.css';


function TechFilter({ handleDevFilter, handleDesignFilter, handleLearnFilter, devFilterActive, designFilterActive, learnFilterActive }) {


  return (

    <div className="tech-filter__container">
      <div className="tech-filter__nav">


        <button className={`tech-filter__nav-dev ${devFilterActive ? "tech-filter__nav-dev--active" : null}`}
          onClick={handleDevFilter}>
          Coding
        </button>




        <button className={`tech-filter__nav-design ${designFilterActive ? "tech-filter__nav-design--active" : null}`}
          onClick={handleDesignFilter}>
          Design
        </button>



        <button className={`tech-filter__nav-learn ${learnFilterActive ? "tech-filter__nav-learn--active" : null}`}
          onClick={handleLearnFilter}>
          Learning
          </button>

      </div>
    </div>



  )
}


export default TechFilter;