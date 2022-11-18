import React from 'react';
import ButtonLink from './ButtonLink';
import { changeDevice } from '../funciones';
import json from '../jsons/json/toPreventips.json';
import jsonPages from '../jsons/json/pages.json';
import '../assets/styles/components/ToPreventips.scss';

const ToPreventips = () => {
  const device = changeDevice();
  const { small } = json;
  let { titulo } = json;
  let { texto } = json;
  let path;
  let className;
  for (let i = 0; i < jsonPages.length; i++) {
    const element = jsonPages[i];
    if (element.toPreventips) {
      path = element.path;
    }
  }
  if (titulo) {
    titulo = <h3 className='text-2xl preventips__anticipate-first lg:mt-24 lg:text-3xl'>{titulo}</h3>;
  }
  if (typeof texto === 'object') {
    className = 'lg:mr-64 lg:pr-32';
    texto = texto.map((row) => {
      const { id } = row;
      const { bold } = row;
      let { oracion } = row;
      if (bold) {
        oracion = <span className='montserrat-b'>{oracion}</span>;
      }
      return (
        <p key={id} className={`lg:text-lg xl:text-2xl inline ${small}`}>
          {oracion}
          {' '}
        </p>
      );
    });
  } else {
    texto = <p className='text-lg lg:text-2xl'>{texto}</p>;
  }
  return (
    <div className='mb-2 main__preventips__anticipate lg:w-full lg:absolute lg:h-full'>
      <div className='lg:w-full lg:h-full orangePrevencion'>
        <div className='pt-4 pb-2 pl-3 text-white preventips__anticipate lg:pl-12 lg:leading-none'>
          {titulo}
          <div className={`leading-none ${className}`}>
            {texto}
          </div>
        </div>
      </div>
      { device === 'mobile' && (
        <div className='flex items-center justify-center pt-4 lg:hidden'>
          <ButtonLink
            className='flex items-center justify-center mt-2 text-xs border-2 rounded-full preventips__anticipate__button w-18 h-18 animated late'
            to={path}
          >
            PREVEN
            <br />
            TIPS
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default ToPreventips;
