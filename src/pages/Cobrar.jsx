import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seguros from '../components/Seguros';
import ButtonLink from '../components/ButtonLink';
import UsarSeguro from '../components/UsarSeguro';
import json from '../jsons/json/cobrar.json';
import { changeDevice } from '../funciones';

const Cobrar = ({ noCubre }) => {
  const { pathname } = useLocation();
  const { alt, img, imgDesktop, noSeguros, classImgDesktop } = json;
  const POSITION_LINK_VAR = 3;
  useEffect(() => {
    let goTo = pathname;
    goTo = goTo.split('/');
    if (goTo[POSITION_LINK_VAR]) {
      goTo = goTo[POSITION_LINK_VAR];
      document.querySelector(`#${goTo}`).scrollIntoView();
    } else {
      goTo = null;
    }
  }, [pathname]);
  return (
    <main className='cobrar animated fadeIn lg:relative'>
      <div className={`relative lg:h-64 lg:bg-no-repeat ${classImgDesktop || 'lg:bg-cover'}  ${!imgDesktop && 'lg:bg-fixed'}`} style={{ backgroundImage: `url(${require(`../assets/static/${imgDesktop || img}`).default})` }}>
        <img className='object-cover object-top w-full h-48 lg:hidden' src={require(`../assets/static/${img}`).default} alt={alt} />
        <div className='absolute w-7/12 h-5 bottom-1 bg-red-transparent-soft' />
      </div>
      <div className='mt-8 mb-3'>
        <UsarSeguro />
      </div>
      {!noSeguros && changeDevice() === 'mobile' && <Seguros />}
      { changeDevice() === 'mobile' && !noCubre && (
        <div className='flex justify-center mb-2 lg:hidden'>
          <ButtonLink
            className='w-12 back__button'
            to='/home/cubre'
          >
            <svg className='object-contain back__img' alt='back' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 172 172' style={{ fill: '#000000' }}>
              <g fill='none' fillRule='nonzero' stroke='none' strokeWidth='1' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='10' strokeDasharray='' strokeDashoffset='0' fontFamily='none' fontWeight='none' fontSize='none' textAnchor='none'>
                <path d='M0,172v-172h172v172z' fill='none' />
                <g fill='rgb(169,156,149)'><path d='M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM51.2775,72.1325c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l34.4,34.4c0.645,0.67188 1.54531,1.04813 2.4725,1.04813c0.92719,0 1.8275,-0.37625 2.4725,-1.04813l34.4,-34.4c1.37063,-1.37062 1.37063,-3.57437 0,-4.945c-1.37062,-1.37062 -3.57437,-1.37062 -4.945,0l-31.9275,31.9275l-31.9275,-31.9275c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075z' /></g>
              </g>
            </svg>
          </ButtonLink>
        </div>
      )}
      {/*  <ArrowBottom goTo={goTo} />*/}
    </main>
  );
};

export default Cobrar;

/*
 <div className='my-4'>
        <div>
          <h1 className='mx-4 montserrat-b lg:text-2xl'>
            {titulo1}
            <br className='lg:hidden' />
            {' '}
            <span className='block w-full text-right lg:inline'>{titulo2}</span>
          </h1>
          <div className='flex justify-end pb-3'>
            <div className='w-10/12 bg-lineas' />
          </div>
        </div>
        <div className='mx-4'>
          <div>
            <p className='text-sm text-center text-gray montserrat-l'>
              {texto}
            </p>
            <div className='flex justify-center my-4'>
              <Llamar alt='Atencion al Cliente' hrefTel='tel:08005559998' tel='0800 555 9998' horario='Lunes a Viernes de 8 a 20 hs.' es='null' />
            </div>
          </div>
          <div className='text-center'>
            <p className='mb-2 text-sm text-gray montserrat-l'>También pueden optar por ingresar a nuestra&nbsp;web</p>
            <a className='text-lg montserrat-b' href='https://www.galiciaseguros.com.ar'>www.galiciaseguros.com.ar</a>
            <p className='mt-2 text-sm text-gray montserrat-l'>
              en la sección
              {' '}
              <span className='text-black montserrat-b'>&quot;Quiero realizar un trámite&quot;.</span>
              {' '}
              Ahi podrán ingresar la denuncia y además
              descargar los formularios para completar.
            </p>
          </div>
        </div>
      </div>
       */
