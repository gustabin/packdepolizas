import React from 'react';
import json from '../jsons/json/asistenciaTexto.json';

const AsistenciaBodySlideMascotas = (props) => {
  const { posicion, indexed } = props;
  const { texto, titulo } = json[indexed].children[posicion];

  return (
    <>
      {titulo && <h4 className='my-2 text-lg montserrat-b text-dark-gray'>{titulo}</h4>}
      <p className='montserrat-l text-gray lg:text-dark-gray'>
        {json.map((textos, i) => {
          return <p>{textos.children[i]}</p>;
        })}
      </p>
    </>
  );
};

export default AsistenciaBodySlideMascotas;
