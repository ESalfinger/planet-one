import React from 'react';

export default function Animal(props) {
    return (
        <div className = "animal" id = {'animal' + props.id}>
            <p>{props.name}</p>
        </div>
    );
}