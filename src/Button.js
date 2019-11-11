import React from 'react';

import './css/button.css';

export function Button(props) {
    return (
        <div className = {props.className}>
            {props.buttonText != null && <p>{props.buttonText}</p>}
            {props.symbol != null && <img alt = {props.symbol} className = "button-symbol" src={require('./' + props.symbol + '.svg')}></img>}
        </div>
    );
}