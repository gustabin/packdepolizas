
import React from 'react';
import json from '../jsons/json/noCubreImg.json';

const NoCubreImg = (props) => {
  const { estado, posicion } = props;
  const { alt, imgOn, imgOff } = json[posicion];
  const src = estado === 1 ? imgOn : imgOff;
  return (
    <img src={require(`../assets/static/${src}`).default} alt={alt} />
  );
};

export default NoCubreImg;
