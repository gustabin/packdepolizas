import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import '../assets/styles/components/ArrowBottom.scss';
import arrowSimple from '../assets/static/arrowSimple.png';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const ArrowBottom = ({ goTo }) => {
  return (
    <div className='absolute w-full text-center ArrowBottom'>
      <button
        type='button'
        className='absolute bottom-0 mb-2 cursor-pointer goMenu animated late'
        onClick={() => {
          document.querySelector(goTo).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }}
      >
        <img className='hidden w-10 lg:block hover:scale-2 hover-all lg:z-30' src={arrowSimple} alt='Arrow Button' />
      </button>
    </div>
  );
};

export default ArrowBottom;
