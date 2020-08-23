import React from 'react';
import './style.css';
import Header from '../../components/Header';

// This is static top section of the page and gives it semantic value.
function About() {
    return (
        <>
            <Header
                title="About"
                subTitleOne="Geh-doll-yuh"
                subTitleTwo="Him/He"
            />
        </>
    )
}


export default About;