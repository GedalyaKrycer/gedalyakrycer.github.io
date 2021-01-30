import React, { Suspense, lazy } from 'react';
import './articles.css';
import Header from '../../components/ui/Header/Header';

const MainArticleContainer = lazy(() => import('../../components/articles/MainArticleContainer/MainArticleContainer'));


function Articles() {
    return (
        <div className="g__footer-pin">
            <Header
                title="Articles"
                subTitleOne={`I love to writing about the details of code, design, and productivity.`}
            />

            <Suspense fallback={<div>Loading…</div>}>
                <MainArticleContainer />
            </Suspense>

        </div>
    )
}


export default Articles;