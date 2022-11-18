import React from "react";
import { asistencia } from "../jsons/json/asistencia";
import json from "../jsons/json/asistencia.json";
import AsistenciaBodySlide from "./AsistenciaBodySlide";
import AsistenciaImagenes from "./AsistenciaImagenes";
import { animateCSS } from "../funciones";
import "../assets/styles/components/AsistenciaSlide.scss";
import homekey from "./../jsons/json/home.json";

class AsistenciaSlide extends React.Component {
  constructor(props) {
    let rowContent;
    switch (homekey.key) {
      case "bici":
        rowContent = asistencia;
        break;
      case "hogar":
        rowContent = asistencia;
        break;
      case "pyme":
        rowContent = asistencia;
        break;
      case "pymeIntegral":
        rowContent = asistencia;
        break;
      default:
        rowContent = json.body;
        break;
    }
    const rows = rowContent;

    super(props);
    const slide = [];
    const minState = [];
    const minStateImage = [];

    for (let i = 0; i < rowContent.length; i++) {
      const elements = rowContent[i];
      minState[i] = {};
      minState[i].id = elements.id;
      minState[i].titulo = elements.titulo;
      minState[i].subtitulo = elements.subtitulo;
      minState[i].textoBottom = elements.textoBottom;
      minState[i].texto = <AsistenciaBodySlide indexed={i} posicion={0} />;
      minState[i].images = [];
      minStateImage.images = [];

      for (let j = 0; j < elements.children; j++) {
        minStateImage.images[j] = {};
        minStateImage.images[j].id = j;
        if (j === 0) {
          minStateImage.images[j].tag = (
            <AsistenciaImagenes indexed={i} posicion={j} estado={1} />
          );
        } else {
          minStateImage.images[j].tag = (
            <AsistenciaImagenes indexed={i} posicion={j} estado={0} />
          );
        }
        minState[i].images.push(minStateImage.images[j]);
      }
      slide.push(minState[i]);
    }
    this.state = {
      slide,
      elementos: rows,
    };
  }

  changeStates(indexed, posicion) {
    const slide = [];
    const minState = [];
    const minStateImage = [];
    const { elementos } = this.state;
    let rowContent = elementos;

    for (let i = 0; i < rowContent.length; i++) {
      const elements = rowContent[i];
      minState[i] = {};
      minState[i].id = elements.id;
      minState[i].titulo = elements.titulo;
      minState[i].subtitulo = elements.subtitulo;
      minState[i].textoBottom = elements.textoBottom;
      if (i === indexed) {
        minState[i].texto = (
          <AsistenciaBodySlide
            key={posicion}
            indexed={indexed}
            posicion={posicion}
          />
        );
      } else {
        minState[i].texto = (
          <AsistenciaBodySlide key={i} indexed={i} posicion={0} />
        );
      }
      minState[i].images = [];
      minStateImage.images = [];
      for (let j = 0; j < elements.children; j++) {
        minStateImage.images[j] = {};
        minStateImage.images[j].id = j;
        if (i === indexed && j === posicion) {
          minStateImage.images[j].tag = (
            <AsistenciaImagenes
              indexed={indexed}
              posicion={posicion}
              estado={1}
            />
          );
        } else if (j === 0 && indexed !== i) {
          minStateImage.images[j].tag = (
            <AsistenciaImagenes indexed={i} posicion={0} estado={1} />
          );
        } else {
          minStateImage.images[j].tag = (
            <AsistenciaImagenes indexed={i} posicion={j} estado={0} />
          );
        }
        minState[i].images.push(minStateImage.images[j]);
      }
      slide.push(minState[i]);
    }
    animateCSS(`.tip${indexed}`, "fadeOut faster", () => {
      this.setState({ slide });
      animateCSS(`.tip${indexed}`, "fadeIn faster");
    });
  }

  render() {
    const { slide } = this.state;
    // let rowContent;
    const rows = slide.map((row) => {
      // rowContent = json.filter((h) => h.id == row.id);
      let { id, titulo, subtitulo, texto, images, textoBottom } = row;
      // subtitulo = rowContent[0].subtitulo;
      const idParent = id;
      return (
        <div
          className={`swiper-slide swiper-slide-${id} bg-white lg:bg-transparent shadow-md lg:shadow-none`}
          key={id}
        >
          <div className="flex flex-col h-full">
            <div className="relative grid grid-cols-6 my-1 ml-3 mr-2 lg:mt-3 lg:mb-0 lg:hidden">
              <h1 className="col-span-1 text-4xl info__swiper__numero lg:text-5xl">
                {id + 1}
              </h1>
              <div className="flex items-center justify-start col-span-5">
                <h2 className="w-full text-center">{titulo}</h2>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="right-0 w-40 linea lg:mr-4" />
            </div>
            {subtitulo && (
              <div className="mt-4 text-center">
                <h3 className="mx-5 text-sm montserrat-m">{subtitulo}</h3>
              </div>
            )}
            <div
              className={`px-5 mt-2 demo lg:text-black tip text-dark-gray tip${id} text-center`}
            >
              {texto}
            </div>
            <hr className="mx-4 mt-4 mb-2 info__separador-desktop lg:bg-white lg:h-1 lg:mt-2" />
            <div className="block info__footer__buttons">
              <div className="flex items-start justify-around h-full">
                {images.map((asistencia) => {
                  const { tag } = asistencia;
                  const { id } = asistencia;
                  return (
                    <button
                      type="button"
                      className="flex w-1/5 hover-all hover:scale-1"
                      key={id}
                      onClick={() => {
                        this.changeStates(idParent, id);
                      }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            {textoBottom && (
              <div>
                <p className="mx-5 my-2 text-xs montserrat-l text-gray lg:text-dark-gray">
                  {textoBottom}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    });
    return <div className="swiper-wrapper">{rows}</div>;
  }
}

export default AsistenciaSlide;
