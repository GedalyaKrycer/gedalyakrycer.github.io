import React, { Suspense, lazy } from 'react';
import './home.css';
import Header from '../../components/ui/Header/Header';

// Lazy loads these components in
const DevPortfolio = lazy(() => import('../../components/home/DevPortfolio/DevPortfolio'));
const ArticleThumbnailContainer = lazy(() => import('../../components/articles/ArticleThumbnailContainer/ArticleThumbnailContainer'));
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
                <ArticleThumbnailContainer />
                <DesignPortfolio />
            </Suspense>
        </>
    )
}


export default Home;