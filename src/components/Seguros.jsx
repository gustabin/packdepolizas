import React from "react";
import "../assets/styles/components/Seguros.scss";
import seguroHogar from "../assets/static/seguroHogar.png";
import seguroAccidentes from "../assets/static/seguroAccidentes.png";
import seguroVida from "../assets/static/SeguroVida.png";
import roboCelular from "../assets/static/roboCelular.png";
import roboPublica from "../assets/static/roboPublica.png";
import seguroPyme from "../assets/static/SeguroPyme.png";
import fondoFuturo from "../assets/static/fondoFuturo.png";
import roboBici from "../assets/static/roboBici.png";
import proteccionPortatil from "../assets/static/proteccionPortatil.png";
import phone from "../assets/static/phone5.png";
import { changeDevice } from "../funciones";
import json from "../jsons/json/home.json";

const Seguros = () => {
  const {
    alt,
    seguroTexto1 = "¿Conocés todos los productos",
    seguroTexto2 = "que tenemos para garantizar tu protección?",
  } = json;
  const altLower = alt.toLowerCase();
  const elements = [
    {
      id: 1,
      alt: "seguro de accidentes personales",
      link: "https://www.galiciaseguros.com.ar/segurosparavosytufamilia/accidentespersonales",
      src: seguroAccidentes,
    },
    {
      id: 2,
      alt: "vida y proteccion familiar",
      link: "https://www.galiciaseguros.com.ar/segurosparavosytufamilia/vida",
      src: seguroVida,
    },
    {
      id: 3,
      alt: "seguro de hogar",
      link: "https://www.galiciaseguros.com.ar/segurosparatuscosas/hogar",
      src: seguroHogar,
    },
    {
      id: 4,
      alt: "seguro pyme",
      link: "https://www.galiciaseguros.com.ar/segurosparatupyme/integralpyme",
      src: seguroPyme,
    },
    {
      id: 5,
      alt: "fondo futuro",
      link: "https://www.galiciaseguros.com.ar/segurosparavosytufamilia/fondofuturo",
      src: fondoFuturo,
    },
    {
      id: 6,
      alt: "robo en via publica",
      link: "https://www.galiciaseguros.com.ar/segurosparatuscosas/roboviapublica",
      src: roboPublica,
    },
    {
      id: 7,
      alt: "protección tecno portátil",
      link: "https://www.galiciaseguros.com.ar/segurosparatuscosas/tecnoportatil",
      src: proteccionPortatil,
    },
    {
      id: 8,
      alt: "robo de celular",
      link: "https://www.galiciaseguros.com.ar/segurosparatuscosas/segurodecelular",
      src: roboCelular,
    },
    {
      id: 9,
      alt: "seguro de robo de bici",
      link: "https://www.galiciaseguros.com.ar/segurosparatuscosas/bicicleta",
      src: roboBici,
    },
  ];
  const newElements = elements.filter((elemento) => {
    return elemento.alt !== altLower;
  });
  if (newElements.length === 9) {
    newElements.splice(8, 1);
  }

  return (
    <div id="seguros" className="seguros lg:relative">
      <section className="main__productos">
        <div className="relative text-center productos__header lg:text-left">
          <div className="absolute w-5/6 h-4 ml-2 bg-lineas-rectas lg:ml-6 lg:w-1/4" />
          <h3 className="px-3 pt-4 pb-2 text-white productos__header-tittle lg:text-2xl lg:ml-20 lg:pb-8">
            {seguroTexto1} <br className="hidden lg:block" />
            <span className="lg:ml-24">{seguroTexto2}</span>
          </h3>
        </div>
        {changeDevice() === "mobile" ? (
          <div className="relative lg:hidden">
            <div className="flex flex-col items-center w-1/2 pl-3 mt-2 mb-12">
              {newElements.map((value, index) => {
                const { id } = value;
                const { alt } = value;
                const { link } = value;
                const { src } = value;
                if (index < 4) {
                  return (
                    <a href={link} key={id}>
                      <img
                        className="w-48 my-2 hover-all hover:scale-1"
                        src={src}
                        alt={alt}
                      />
                    </a>
                  );
                }
                return null;
              })}
            </div>
            <div className="absolute top-0 right-0 flex flex-col items-center float-right w-1/2 pr-3">
              <div className="mt-10">
                {newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index >= 4) {
                    return (
                      <a
                        href={link}
                        key={id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-48 my-5 hover-all hover:scale-1"
                          src={src}
                          alt={alt}
                        />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative hidden lg:block">
            <div>
              <div className="grid grid-cols-4 gap-4">
                {newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  return (
                    <a
                      href={link}
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-48 my-3 hover-all hover:scale-1"
                        src={src}
                        alt={alt}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="px-3 pt-4 mb-5 main__comunicate lg:flex lg:justify-center lg:pt-12 lg:mb-0">
        <div className="w-full h-1 bg-lineas-rectas lg:hidden" />
        <div className="flex items-center mt-4 lg:mt-0">
          <a
            href="https://www.galiciaseguros.com.ar/seguros"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-2xl text-white rounded-full orangeGalcia montserrat-b hover-all hover:scale-1"
          >
            ¡Contrata tu seguro!
          </a>
        </div>
        <div className="lg:ml-8">
          <p className="mt-3 telefono__info-parrafo text-gray montserrat-r">
            Comunicate con nuestro
          </p>
          <h2 className="telefono__info-tittle text-dark-gray montserrat-b">
            CENTRO DE VENTA TELEFÓNICA
          </h2>
          <div className="flex">
            <img
              className="h-16 comunicate__img-phone"
              src={phone}
              alt="Telefono"
            />

            <div className="flex flex-col items-start justify-center ml-4">
              <button
                type="button"
                className="text-xl cursor-pointer comunicate__num text-dark-gray
                montserrat-eb"
              >
                {" "}
                0800 555 9797
              </button>
              <p className="comunicate__info text-gray montserrat-l">
                Lunes a viernes de 9 a 20 hs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*changeDevice() === 'desktop' && <ArrowBottom goTo={goTo} />*/}
    </div>
  );
};

export default Seguros;
/*content-center justify-center*/
