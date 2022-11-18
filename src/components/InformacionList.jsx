import React from 'react';
import arrowBottom from '../assets/static/arrow-bottom.png';
import { collapse } from '../funciones';

const InformacionList = ({ titulo, id, device, texto }) => {


  return (
    <>
      {titulo && (
        <div
          role='button'
          tabIndex={id}
          className={id === 0 && device === 'mobile' ? 'mt-6 bg-white border-dotted border-b-2 montserrat-eb flex justify-between pb-1 items-center text-dark-gray cursor-pointer lg:flex lg:flex-row-reverse lg:py-1' : 'bg-white border-dotted border-b-2 montserrat-eb flex justify-between py-1 items-center text-dark-gray cursor-pointer lg:flex lg:flex-row-reverse'}
          onClick={() => {
            collapse(id, device);
           
          }}
        >
          <h4 className='lg:w-full lg:ml-4 collapse__object-titulo'>{titulo}</h4>
          <button type='button' className='collapsible' id={`botonAnticipate${id}`}>
            <img className='w-6 h-6 arrowAnticipate lg:h-auto lg:w-8' src={arrowBottom} alt='arrowDown' />
          </button>
        </div>
      )}
      { Array.isArray(texto) ? (
        <div className='contenido lg:space-y-1'>
          {texto.map((lista) => {
            const { id, texto } = lista;
            return (
              <li key={id} className='mb-4 border-b-2 border-dotted lg:col-span-1 lg:mb-0'>
                <span>{texto}</span>
              </li>
            );
          })}
        </div>
      ) :
        (
          <li className={`lg:col-span-1 border-dotted border-b-2 mb-4 lg:mb-0 ${titulo ? 'contenido' : 'bulletsM-0'}`}>
            <span>{texto}</span>
          </li>
        )}
    </>
  );
};

export default InformacionList;
