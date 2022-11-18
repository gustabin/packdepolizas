import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { collapseMenuDesktop } from '../funciones';
import json from '../jsons/json/pages.json';
import '../assets/styles/components/HeaderDesktop.scss';
import logo from '../assets/static/logo.png';
import facebook from '../assets/static/facebook.png';
import linkedin from '../assets/static/linkedin.png';
import youtube from '../assets/static/youtube.png';
import menuDesk from '../assets/static/menuDesk.png';
import phoneMin from '../assets/static/phoneMin.png';
import correo from '../assets/static/correo.png';
import GoTop from './GoTop';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const HeaderDesktop = () => {


  return (
    <div className='absolute w-full h-screen'>
      <div className='fixed left-0 z-20 mt-2 ml-2'>
        <button type='button' className='w-3/6 cursor-pointer' onClick={() => { document.getElementById('home').scrollIntoView({ block: 'start', behavior: 'smooth' }); }}>
          <img className='w-24' src={logo} alt='logo' />
        </button>
      </div>
      <div className='fixed right-0 z-20 flex mt-3 mr-12'>
        <div className='flex mr-4'>
          <div className='mr-1'>
            <button type='button' className='w-10 h-10 p-1 bg-white rounded-full shadow-md hover:bg-orange-300 hover-all' onClick={() => { window.open('https://www.facebook.com/GaliciaSeguros', '_blank'); }}>
              <img className='object-contain w-full' src={facebook} alt='facebook' />
            </button>
          </div>
          <div className='mr-1'>
            <button type='button' className='w-10 h-10 p-1 bg-white rounded-full shadow-md hover:bg-orange-300 hover-all' onClick={() => { window.open('https://cl.linkedin.com/company/galicia-seguros-grupo-financiero-galicia-banco-galicia-', '_blank'); }}>
              <img className='object-contain w-full' src={linkedin} alt='linkedin' />
            </button>
          </div>
          <div>
            <button
              type='button'
              className='w-10 h-10 bg-white rounded-full shadow-md p-1-2 hover:bg-orange-300 hover-all'
              onClick={() => { window.open('https://www.youtube.com/channel/UCazMzLHs9UTit9wDShfE2_g', '_blank'); }}
            >
              <img className='object-contain w-full' src={youtube} alt='youtube' />
            </button>
          </div>
        </div>
        <div className='ml-2'>
          <button type='button' onClick={() => { collapseMenuDesktop(); }} className='flex justify-center w-10 h-10 p-1 bg-white rounded-full shadow-md button__menu hover:bg-orange-300 hover-all'>
            <img className='object-contain w-full' src={menuDesk} alt='menu' />
          </button>
        </div>
      </div>
      <div className='fixed right-0 z-40 flex-grow block h-screen rounded-tl-lg shadow-2xl menu__desplegado-desktop'>
        <div className='px-4 pb-2 text-sm text-center menu__desplegado__children montserrat-m'>
          <hr className='mt-2' />
          <button type='button' onClick={(e) => { document.querySelector('.cubre').scrollIntoView({ block: 'start', behavior: 'smooth' }); collapseMenuDesktop(); }} className='block px-2 my-4 mr-4 cursor-pointer text-gray hover:bg-orange-300'>
            QUE TE CUBRE
          </button>
          <hr />
          {json.map((row) => {
            const { id, title, className, noOpcionMenu, onlyMobile } = row;
            if (!noOpcionMenu) {
              if (!onlyMobile) {
                return (
                  <div key={id}>
                    <button type='button' onClick={(e) => { document.querySelector(className).scrollIntoView({ block: 'start', behavior: 'smooth' }); collapseMenuDesktop(); }} className='block px-2 my-4 mr-4 cursor-pointer text-gray hover:bg-orange-300'>
                      {title}
                    </button>
                    <hr />
                  </div>
                );
              }
              return null;
            }
            return null;
          })}
          <hr />
        </div>
      </div>
      <div className='fixed z-10 h-full ml-4'>
        <div className='flex flex-col justify-center h-full'>
          <div className='mb-2'>
            <a className='block w-10 h-10 p-3 bg-white rounded-full shadow-md hover:bg-orange-300 hover-all' href='tel:08005559998'>
              <img className='object-scale-down w-full h-full' src={phoneMin} alt='Telefono' />
            </a>
          </div>
          <div className='mt-2'>
            <a className='block w-10 h-10 p-3 bg-white rounded-full shadow-md hover:bg-orange-300 hover-all' href='email:infogalicia@galiciaseguros.com.ar'>
              <img className='object-scale-down w-full' src={correo} alt='Correo' />
            </a>
          </div>
        </div>
      </div>
      <GoTop />
    </div>
  );
};

export default HeaderDesktop;
