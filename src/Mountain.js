import React from 'react';

export default function Mountain(props) {
    return (
        <div className = "mountain" id = {'mountain' + props.id}>
            <p>{props.name}</p>
            <p>{props.country}</p>
        </div>
    );
}