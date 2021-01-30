import React from 'react';
import './notFound.css';
import Header from '../../components/ui/Header/Header';

// This is static top section of the page and gives it semantic value.
function NotFound() {
    return (
        <div className="g__footer-pin">
            <Header
                title="404"
                subTitleOne={`Oops! Looks like this page does not exist or is under maintenance.`}
            />
           
        </div>
    )
}


export default NotFound;