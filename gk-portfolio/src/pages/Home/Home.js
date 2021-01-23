import React, { Suspense, lazy } from 'react';
import './home.css';
import Header from '../../components/ui/Header/Header';

// Lazy loads these components in
const DevPortfolio = lazy(() => import('../../components/home/DevPortfolio/DevPortfolio'));
const DesignPortfolio = lazy(() => import('../../components/DesignPortfolio'));



function Home() {


    return (
        <>
            <Header
                title="Hi, I’m Gedalya, a front-end developer and creative."
                subTitleOne={`I organize details — through code, design, motion and photography.`}
            />

            <Suspense fallback={<div>Loading…</div>}>
                <DevPortfolio />
                <DesignPortfolio />
            </Suspense>
        </>
    )
}


export default Home;