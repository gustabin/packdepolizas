import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import json from '../jsons/json/asistenciaBodySlide.json';

const AsistenciaBodySlide = (props) => {
  const { posicion, indexed } = props;
  const { texto, titulo, textos, id } = json[indexed].children[posicion];
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex items-center'>
          <BsChevronLeft className='w-16 h-16 mr-4 text-red-800 fill-current lg:w-10 lg:h-10' />
        </div>
        <div>
          {titulo && <h4 className='my-2 text-lg montserrat-b text-dark-gray'>{titulo}</h4>}
          {textos ? textos.map((textito) => (
            <p key={id} className='mb-4 montserrat-l text-gray lg:text-dark-gray'>
              {textito}
            </p>
          )) : (
            <p key={id} className='montserrat-l text-gray lg:text-dark-gray'>
              {texto}
            </p>
          )}
        </div>
        <div className='flex items-center'>
          <BsChevronRight className='w-16 h-16 ml-4 text-red-800 fill-current lg:w-10 lg:h-10' />
        </div>
      </div>
    </>
  );
};

export default AsistenciaBodySlide;
