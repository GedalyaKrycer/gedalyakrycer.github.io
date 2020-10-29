import React, {Suspense, lazy } from 'react';
import './style.css';
import Header from '../../components/Header';
import DevPortfolio from '../../components/DevPortfolio';
import DesignPortfolio from '../../components/DesignPortfolio';




function Home() {


    return (
        <>
            <Header
                title="Hi, I’m Gedalya, a front-end developer and creative."
                subTitleOne={`I organize details — through code, design, motion and photography.`}
            />
            <DevPortfolio />
            <DesignPortfolio />

        </>
    )
}


export default Home;