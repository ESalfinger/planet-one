import React from 'react';
import ger from './images/germanFH.svg';
import eng from './images/englishFH.svg';

import './css/fh.css'

export default function Fh() {

    if (localStorage.getItem("lng") === "de") {
        return (
            <div className = 'fh-logo'>
                <img src={ger} alt='logo fh hagenbger'></img>
            </div>
        );
    }
    return (
        <div className = 'fh-logo'>
            <img src={eng} alt='logo fh hagenbger'></img>
        </div>
    );
}