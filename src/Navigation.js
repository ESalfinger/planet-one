import React from 'react';
import open from './icons/forward.svg';
import i18n from 'i18next';
import k from "./i18n/keys";

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
                    <p className='nav-link' onClick = {() => scrollTo("hero")}>{i18n.t(k['HEROTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("space")}>{i18n.t(k['SPACETITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("ozone")}>{i18n.t(k['OZONETITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("pollution")}>{i18n.t(k['POLLUTIONTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("mountains")}>{i18n.t(k['MOUNTAINSTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("weather")}>{i18n.t(k['WEATHERTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("forests")}>{i18n.t(k['FORESTSTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("animals")}>{i18n.t(k['ANIMALSTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("ice")}>{i18n.t(k['ICETITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("plastic")}>{i18n.t(k['PLASTICTITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("time")}>{i18n.t(k['TIMETITLE'])}</p>
                    <p className='nav-link' onClick = {() => scrollTo("team")}>{i18n.t(k['TEAMTITLE'])}</p>
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
