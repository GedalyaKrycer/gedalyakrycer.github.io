import React from 'react';
import './style.css';

// This is static top section of the page and gives it semantic value.
function Header({title, subTitleOne, subTitleTwo}) {
    return (
        <header>
            <h1 className="g_white-color">{title}</h1>
            <hr />
            <h3 className="g_white-color">{subTitleOne}</h3>
            <h3 className="g_white-color">{subTitleTwo}</h3>
        </header>
    )
}


export default Header;