import React from "react";
import json from "../jsons/json/asistenciaImagenes.json";

const AsistenciaImagenes = (props) => {
  const { indexed, posicion, estado } = props;
  const { alt } = json[indexed].children[posicion];
  const { img } = json[indexed].children[posicion].switch[estado];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-12 h-12">
        <img src={require(`../assets/static/${img}`).default} alt={alt} />
      </div>
      <p className="my-2 leading-none text-center whitespace-normal text-dark-gray text-xxs-pt lg:text-sm montserrat-r">
        {alt}
      </p>
    </div>
  );
};

export default AsistenciaImagenes;
