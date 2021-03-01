import React, { Suspense, lazy } from 'react';
import './about.css';
import Header from '../../components/ui/Header/Header';
import Bio from '../../components/about/Bio/Bio';

// Lazy loads these components in
const BioBlocks = lazy(() => import('../../components/about/BioBlocks/BioBlocks'));
const FavoriteThings = lazy(() => import('../../components/about/FavoriteThings/FavoriteThings'));
const CareerContainer = lazy(() => import('../../components/about/CareerContainer/CareerContainer'));
const TechContainer = lazy(() => import('../../components/about/TechContainer/TechContainer'));




function About() {


    return (
        <>
            <Header
                title="About"
                subTitleOne="Geh-doll-yuh"
                subTitleTwo="Him/He"
            />
            <Bio />
            <Suspense fallback={<div style={{color: 'white', display: 'flex', justifyContent: 'center'}}><p>Loading…</p></div>}>
                <BioBlocks />
                <FavoriteThings />
                <CareerContainer />
                <TechContainer />
            </Suspense>
        </>
    )
};


export default About;
