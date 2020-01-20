import React from 'react';
import arrow from './icons/arrow_down.svg';

import './css/Language.css'

export function Language() {
    
    const changeLanguage = lng => {
        localStorage.setItem("lng", lng);
        window.location.reload();
    };

    return (
        <div className = "lang-toggle">
            <div className = "lang-option" id = "en" onClick = {() => changeLanguage("en")}>
                <img src = {arrow} alt="flagg greate britan"></img>
            </div>
            <p className = "lang-seperator">|</p>
            <div className = "lang-option" id = "de" onClick = {() => changeLanguage("de")}>
                <img src = {arrow} alt="flagg germany"></img>
            </div>
        </div>
    );
}