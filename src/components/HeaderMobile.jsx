import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animateCSS, collapseMenu } from '../funciones';
import json from '../jsons/json/pages.json';
import '../assets/styles/components/HeaderMobile.scss';
import logo from '../assets/static/logo.png';
import menu from '../assets/static/menu.png';

const HeaderMobile = () => {
  const history = useHistory();
  useEffect(() => {
    document.body.classList.add('overflow-auto');
    if (document.body.classList.contains('overflow-hidden')) {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);


  return (
    <section className='relative header'>
      <nav className='flex flex-wrap items-center justify-between px-3 py-1 bg-white menu__mobile hover-all'>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <button
            type='button'
            className='w-3/6 cursor-pointer'
            onClick={() => {
              animateCSS('main', 'fadeOut', () => {
                history.push('/');
              });
              if (document.querySelector('footer')) {
                animateCSS('footer', 'fadeOut') ;
              }
            }}
          >
            <img src={logo} alt='Logo' />
          </button>
        </div>
        <div className='block lg:hidden'>
          <button type='button' onClick={() => { collapseMenu(); }} className='flex items-center px-3 py-2 button__menu'>
            <img className='w-8' src={menu} alt='Menu' />
          </button>
        </div>
      </nav>
      <div id='Menu' className='absolute right-0 h-screen truncate rounded-b-lg menu__desplegado'>
        <div className='pb-2 mx-2 text-sm text-center menu__desplegado__children montserrat-m'>
          <button
            type='button'
            onClick={(e) => {
              
              animateCSS('main', 'fadeOut', () => { history.push('/home/cubre'); });collapseMenu();if (document.querySelector('footer')) {
                animateCSS('footer', 'fadeOut') ;
              }
            }}
            className='block w-full mt-4 border-solid cursor-pointer text-gray'
          >
            QUE TE CUBRE
          </button>
          <hr className='mt-3 border-gray-600' />
          {json.map((row) => {
            const { id, title, noOpcionMenu, onlyDesktop, param } = row;
            let { path } = row;
            if (param) {
              path = path.split(':');
              path = path[0] + param;
            }
            if (!noOpcionMenu) {
              if (!onlyDesktop) {
                return (
                  <div key={id}>
                    <button
                      type='button'
                      onClick={(e) => {
                       
                        animateCSS('main', 'fadeOut', () => { history.push(path); }); collapseMenu();if (document.querySelector('footer')) {
                          animateCSS('footer', 'fadeOut') ;
                        }
                      }}
                      className='block w-full mt-4 border-solid cursor-pointer text-gray'
                    >
                      {title}
                    </button>
                    <hr className='mt-3 border-gray-600' />
                  </div>
                );
              }
              return null;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
