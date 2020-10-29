import React, { Suspense, lazy } from 'react';
import './style.css';
import Header from '../../components/Header';
import Bio from '../../components/Bio';
// import FavoriteThings from '../../components/FavoriteThings';
// import Skills from '../../components/Skills';
// import ContactForm from '../../components/ContactForm';

// Lazy loads these components in
const FavoriteThings = lazy(() => import('../../components/FavoriteThings'));
const Skills = lazy(() => import('../../components/Skills'));
const ContactForm = lazy(() => import('../../components/ContactForm'));



function About() {


    return (
        <>
            <Header
                title="About"
                subTitleOne="Geh-doll-yuh"
                subTitleTwo="Him/He"
            />
            <Bio />
            <Suspense fallback={<div>Loading…</div>}>
                <FavoriteThings />
                <Skills />
                <ContactForm />
            </Suspense>
        </>
    )
}


export default About;