import React from 'react';
import json from '../jsons/json/poliza.json';

const Poliza = (props) => {
  const { posicion } = props;
  const { titulo } = json[posicion];
  const { texto } = json[posicion];
  const SOLO_TITULO = 0;
  return (
    <div className='lg:h-full'>
      <h2 className={posicion === SOLO_TITULO ? 'target__tittle my-4 lg:my-0 lg:h-full lg:flex lg:items-center lg:red-color montserrat-m text-sm' : 'target__tittle my-4 lg:red-color montserrat-m text-sm'}>{titulo}</h2>
      <p className='target__p mb-2 text-sm montserrat-l'>{texto}</p>
    </div>
  );
};

export default Poliza;
