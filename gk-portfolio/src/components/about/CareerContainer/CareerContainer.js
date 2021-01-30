import React from 'react';
import './careerContainer.css';
import careerHistory from '../../../utils/careerHistory.json';
import CareerCard from '../CareerCard/CareerCard';
import ScrollContainer from 'react-indiana-drag-scroll';




function CareerContainer() {

    return (
        <section className="g__about-sections">
            <h2 >Career</h2>

            <div className="g_negative-margin cc__intro-wrapper">
                <p className="cc__intro-text g__body-lg">Here is what I have been up to in <span className="cc__intro-text--dev">Development</span>, <span className="cc__intro-text--design">Design</span> and <span className="cc__intro-text--learn">Education</span>.</p>

            </div>
            <div className="cc__timeline-wrapper">
                <ScrollContainer className="cc__overflow" >

                    <div className="cc__buffer"></div>
                    {careerHistory && careerHistory.map((card, index) => {
                        return <CareerCard
                            key={index + card.title}
                            title={card.title}
                            company={card.company}
                            timeFrame={card.time_frame}
                            startDate={card.start_date}
                            description={card.description}
                            type={card.type}
                        />
                    })}
                    <div className="cc__buffer"></div>

                </ScrollContainer>
            </div>

        </section>
    )
}


export default CareerContainer;