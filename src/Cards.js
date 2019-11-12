import React, {useEffect} from 'react';
import Animal from './Animal';
import Mountain from './Mountain';
import animals from './strings/animals.json';
import mountains from './strings/mountains.json';
import forward from './icons/forward.svg';
import back from './icons/back.svg';

import './css/Cards.css';

export function Cards(props) {

    useEffect(() => {
        let startM = document.getElementsByClassName('mountain')[0];
        startM.classList.add('active');

        let startA = document.getElementsByClassName('animal')[0];
        startA.classList.add('active');
    })

    if (props.type === 'animals') {
        return (
            <div className = 'cards'>
                <div className = "control back" onClick = {() => switchCard("back", "animal")}>
                    <img src = {back} alt = "back"></img>
                </div>
                {animals.map((animal)=> {
                    return <Animal key = {animal.id} id = {animal.id} name = {animal.name}/>
                })}
                <div className = "control forward" onClick = {() => switchCard("forward", "animal")}>
                     <img src = {forward} alt = "forward"></img>
                </div>
            </div>
        );
    } 
    return (
        <div className = 'cards'>
            <div className = "control back" onClick = {() => switchCard("back", "mountain")}>
                <img src = {back} alt = "back"></img>
            </div>
            {mountains.map((mountain)=> {
                return <Mountain key = {mountain.id} id = {mountain.id} name = {mountain.name} country = {mountain.country}/>
            })
            }
            <div className = "control forward" onClick = {() => switchCard("forward", "mountain")}>
                <img src = {forward} alt = "forward"></img>
            </div>
        </div>
    );
}

function switchCard(direction, type) {

    let elements = document.getElementsByClassName(type);
    let current;
    let target;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('active')) {
            
            current = i;

            if (direction === 'forward') {
                target = i + 1;
            } else {
                target = i - 1;
            }
        }
    }
    elements[current].classList.remove('active');

    if (target < 0) {
        elements[elements.length - 1].classList.add('active');
    } else if (target < elements.length) {
        elements[target].classList.add('active');
    } else {
        elements[0].classList.add('active');
    }
    
}

