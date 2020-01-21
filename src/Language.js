import React from 'react';
import german from './icons/german.svg';
import english from './icons/english.svg';

import './css/Language.css'

export function Language() {
    
    const changeLanguage = lng => {
        localStorage.setItem("lng", lng);
        window.location.reload();
    };

    return (
        <div className = "lang-toggle">
            <div className = "lang-option" id = "en" onClick = {() => changeLanguage("en")}>
                <img src = {english} alt="flagg greate britan"></img>
            </div>
            <div className = "lang-option" id = "de" onClick = {() => changeLanguage("de")}>
                <img src = {german} alt="flagg germany"></img>
            </div>
        </div>
    );
}