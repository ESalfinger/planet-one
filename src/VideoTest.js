import React from 'react';
import Backgound from './bg.jpg';
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import { Video } from './TransparentBG.webm';

export function VideoTest() {  
    return (
        <div>
            <video className = 'video' controls autoPlay>
                <source src = { Video }/>
            </video>
            <img className = 'background' src = { Backgound } alt='background'></img>
        </div>
    );
}