import React from 'react';
import open from './icons/forward.svg';
import strings from './strings/navigation.json';

import './css/Navigation.css';

export function Navigation() {
  const changeLanguage = lng => {
    localStorage.setItem("lng", lng);
    window.location.reload();
  };
    return (
        <div className = 'navigation'>
            <div className = 'trigger-nav-container' onClick = {toggleNav}>
                <img alt='navigation symbol' src={open} className = 'trigger-nav'></img>
            </div>
            <div className = 'open-nav'>
              <button onClick={() => changeLanguage("de")}>DE</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
                <div className = 'nav-links'>
                    <p className='nav-link' onClick = {() => scrollTo("hero")}>{strings.hero}</p>
                    <p className='nav-link' onClick = {() => scrollTo("space")}>{strings.space}</p>
                    <p className='nav-link' onClick = {() => scrollTo("air")}>{strings.air}</p>
                    <p className='nav-link' onClick = {() => scrollTo("mountains")}>{strings.mountains}</p>
                    <p className='nav-link' onClick = {() => scrollTo("weather")}>{strings.weather}</p>
                    <p className='nav-link' onClick = {() => scrollTo("polution")}>{strings.polution}</p>
                    <p className='nav-link' onClick = {() => scrollTo("forests")}>{strings.forests}</p>
                    <p className='nav-link' onClick = {() => scrollTo("animals")}>{strings.animals}</p>
                    <p className='nav-link' onClick = {() => scrollTo("ice")}>{strings.ice}</p>
                    <p className='nav-link' onClick = {() => scrollTo("plastic")}>{strings.plastic}</p>
                    <p className='nav-link' onClick = {() => scrollTo("coral")}>{strings.coral}</p>
                    <p className='nav-link' onClick = {() => scrollTo("time")}>{strings.time}</p>
                    <p className='nav-link' onClick = {() => scrollTo("team")}>{strings.team}</p>
                </div>
            </div>
        </div>
    );

    function scrollTo(target) {
        let element = document.getElementsByClassName(target)[0];

        element.scrollIntoView({behavior: "smooth", block: "start"});
        toggleNav();
    }

    function toggleNav() {
        let element = document.getElementsByClassName('navigation')[0];
        let trigger = document.getElementsByClassName('trigger-nav')[0];

        if (element.classList.contains('open')) {
            element.classList.remove('open');
            trigger.classList.remove('rotate-open');
            element.classList.add('close');
            trigger.classList.add('rotate-close');
        } else {
            element.classList.remove('close');
            trigger.classList.remove('rotate-close');
            element.classList.add('open');
            trigger.classList.add('rotate-open');
        }
    }
}
