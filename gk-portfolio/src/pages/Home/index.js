import React from 'react';
import './style.css';
import Header from '../../components/Header';
import DevPortfolio from '../../components/DevPortfolio';

// This is static top section of the page and gives it semantic value.
function Home() {
    return (
        <>
            <Header
                title="Hi, I’m Gedalya, a front-end developer and creative."
                subTitleOne="I organize details — through code, design, motion and photography."
            />
            <DevPortfolio />
        </>
    )
}


export default Home;