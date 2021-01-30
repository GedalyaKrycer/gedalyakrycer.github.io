import React, { Suspense, lazy } from 'react';
import './home.css';
import Header from '../../components/ui/Header/Header';

// Lazy loads these components in
const DevPortfolio = lazy(() => import('../../components/home/DevPortfolio/DevPortfolio'));
const HomeArticleContainer = lazy(() => import('../../components/home/HomeArticleContainer/HomeArticleContainer'));
const DesignPortfolio = lazy(() => import('../../components/home/DesignPortfolio/DesignPortfolio'));



function Home() {


    return (
        <>
            <Header
                title="Hi, I’m Gedalya, front-end developer and creative."
                subTitleOne={`I organize details — through code, design, motion and photography.`}
            />

            <Suspense fallback={<div>Loading…</div>}>
                <DevPortfolio />
                <HomeArticleContainer />
                <DesignPortfolio />
            </Suspense>
        </>
    )
}


export default Home;