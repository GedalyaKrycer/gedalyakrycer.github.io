import React from 'react';
import './articles.css';
import Header from '../../components/ui/Header/Header';


function Articles() {
    return (
        <div className="g__footer-pin">
            <Header
                title="Articles"
                subTitleOne={`I love to writing about the details of code, design, and productivity.`}
            />
           
        </div>
    )
}


export default Articles;