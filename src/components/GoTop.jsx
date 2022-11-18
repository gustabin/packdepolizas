import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { animateCSS } from '../funciones';
import '../assets/styles/components/GoTop.scss';
import top from '../assets/static/top.png';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const scrollFunction = () => {
  const goTop = document.querySelector('.goTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.classList.remove('fadeOut');
    goTop.style.display = 'block';
    if (!goTop.classList.contains('flag')) {
      animateCSS('.goTop', 'fadeIn', () => {
        goTop.classList.replace('noFlag', 'flag');
      });
    }
  } else {
    animateCSS('.goTop', 'fadeOut', () => {
      if (goTop.classList.contains('flag')) {
        goTop.style.display = 'none';
        goTop.classList.replace('flag', 'noFlag');
      }
    });
  }
};

const GoTop = () => {

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
    return () => {
      window.onscroll = () => { };
    };
  }, []);

  return (
    <button type='button' className='goTop fixed h-12 w-12 z-50 hidden rounded-full shadow-2xl cursor-pointer hover:bg-orange-300 hover-all fast noFlag' onClick={() => { document.querySelector('body').scrollIntoView({ block: 'start', behavior: 'smooth' }); }}>
      <img className='object-contain h-full w-full' src={top} alt='Go Top' />
    </button>
  );

};

export default GoTop;
