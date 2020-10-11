import React from 'react';
import './style.css';


function TechFilter({ handleDevFilter, handleDesignFilter, handleLearnFilter, devFilterActive, designFilterActive, learnFilterActive, handleResetFilter, resetFilterActive }) {


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
        {
          resetFilterActive ? <button className="tech-filter__nav-reset"
          onClick={handleResetFilter}>
          Reset
        </button> :
        null
        }
        
      </div>
    </div>



  )
}


export default TechFilter;