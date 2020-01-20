import React from 'react';

import './css/Language.css'

export function Language() {
    
    const changeLanguage = lng => {
        localStorage.setItem("lng", lng);
        window.location.reload();
    };

    return (
        <div className = "lang-toggle">
            <div className = "lang-option" id = "en" onClick = {() => changeLanguage("en")}>
                <p>EN</p>
            </div>
            <p className = "lang-seperator">|</p>
            <div className = "lang-option" id = "de" onClick = {() => changeLanguage("de")}>
                <p>DE</p>
            </div>
        </div>
    );
}