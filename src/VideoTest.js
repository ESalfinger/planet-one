import React from 'react';
import Backgound from './bg.jpg';
import Video from './QuicktimeTest.mov';
import { Player } from 'video-react';

export function VideoTest() {  
    return (
        <div> 
            <Player autoPlay fluid>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
            <img className = 'background' src = { Backgound }></img>
        </div>
    );
}