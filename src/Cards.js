import React from 'react';
import Animal from './Animal';
import Mountain from './Mountain';
import animals from './strings/animals.json';
import mountains from './strings/mountains.json';

export function Cards(props) {
    if (props.type === 'animals') {
        return (
            <div className = 'cards'>
                {animals.map((animal)=> {
                    return <Animal name = {animal.name}/>
                })
                }
            </div>
        );
    } 
    return (
        <div className = 'cards'>
            {mountains.map((mountain)=> {
                return <Mountain name = {mountain.name} country = {mountain.country}/>
            })
            }
        </div>
    );
}