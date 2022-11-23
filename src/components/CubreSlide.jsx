import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { changeDevice } from "../funciones";
import { hogar } from "./../jsons/cubreSlide";
import { bici } from "./../jsons/cubreSlide";
import { pyme } from "./../jsons/cubreSlide";
import { pymeIntegral } from "./../jsons/cubreSlide";
import homekey from "./../jsons/json/home.json";
import json from "../jsons/json/cubreSlide.json";
import jsonCubre from "../jsons/json/cubre.json";
import "../assets/styles/components/CubreSlide.scss";
import whiteBar from "../assets/static/white3.png";
import CubreSlideCard from "./CubreSlideCard";
import CubreSlideFondo from "./CubreSlideFondo";

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

class CubreSlide extends React.Component {
  constructor(props) {
    super(props);
    this.last = false;
  }

  componentDidMount() {
    const device = changeDevice();
    this.design(device);
    if (device === "mobile") {
      const HEADER_TAM = 54;
      let tamaño = document.querySelector("main").clientHeight;
      const tamañoWidth = document.querySelector("main").clientWidth;
      const orientationString =
        window.innerWidth > window.innerHeight ? "Landscape" : "Primary";
      tamaño += HEADER_TAM;
      if (orientationString === "Primary") {
        if (tamaño <= 640 || tamañoWidth <= 475) {
          const titulo = document.querySelectorAll(".section__header__titulo");
          const img = document.querySelectorAll(".father__header__img");
          const sectionWrapper = document.querySelectorAll(
            ".main__section__wrapper"
          );
          const sectionWrapperDescription = document.querySelectorAll(
            ".section__wrapper__description"
          );
          const list = document.querySelectorAll(".wrapper__last-li");
          titulo.forEach((element) => {
            element.classList.replace("text-xl", "text-lg");
            element.classList.replace("mb-4", "mb-1");
            element.classList.add("leading-tight");
          });
          img.forEach((element) => {
            element.classList.replace("w-1/3", "w-14");
          });
          sectionWrapper.forEach((element) => {
            element.classList.replace("mt-2", "mt-1");
          });
          sectionWrapperDescription.forEach((element) => {
            element.classList.replace("text-base", "text-sm");
          });
          list.forEach((element) => {
            element.classList.replace("text-base", "text-sm");
          });
          if (document.querySelector(".section__wrapper-link")) {
            document
              .querySelector(".section__wrapper-link")
              .classList.replace("text-base", "text-sm");
          }
          if (document.querySelector(".section__header__titulo__last")) {
            document
              .querySelector(".section__header__titulo__last")
              .classList.replace("text-xl", "text-base");
            document
              .querySelector(".section__header__titulo__last")
              .classList.replace("w-5/6", "w-8/12");
            document
              .querySelector(".father__bg-lineas-diagonales")
              .classList.add("absolute", "right-0", "bottom-0");
            document
              .querySelector(".bg-lineas-diagonales__last")
              .classList.replace("w-24", "w-18");
            document
              .querySelector(".main__section__wrapper__last")
              .classList.replace("text-base", "text-sm");
          }
        }
      }
    }
  }

  design = (device) => {
    if (device === "mobile") {
      document
        .querySelector(".div__swiper-wrapper")
        .classList.add("swiper-wrapper");
      const slides = document.querySelectorAll(".div__swiper-slide");
      slides.forEach((element) => {
        element.classList.add("swiper-slide");
      });
    } else {
      document
        .querySelector(".div__swiper-wrapper")
        .classList.remove("swiper-wrapper");
      const slides = document.querySelectorAll(".div__swiper-slide");
      slides.forEach((element) => {
        element.classList.remove("swiper-slide");
      });
    }
  };

  render() {
    const device = changeDevice();
    const { orangeText1, orangeText2, bold, fondoFuturo, mascotas } = jsonCubre;
    const { length } = json;
    let usarSeguroReady = false;
    const rows = json.map((row) => {
      const { id, alt, conoceMas, last, hasUsarSeguro } = row;

      let { listPosition } = row;
      let { tamaño } = row;
      if (!usarSeguroReady) {
        usarSeguroReady = hasUsarSeguro;
      }
      if (!tamaño) {
        tamaño = "h-16";
      }
      if (!listPosition) {
        listPosition = "text-center";
      }
      if (alt) {
        const altsChiquito = ["mano", "valija"];
        const altsGrande = ["corazon", "vehiculos"];
        const altsMediano = [
          "fuego caja",
          "vidrio roto",
          "familia",
          "ladron",
          "robo",
          "muleta",
          "pc",
          "asistir",
          "indemnizacion",
          "gastos por extravío",
          "servicios y asistencias para tu mascota",
          "aportes y rescates de fondos",
        ];
        const altsAnchos = [
          "calendario",
          "indemnizacion",
          "silla de ruedas",
          "remove",
          "gastos",
          "indemnización por robo de tu mascota",
          "responsabilidad civil",
          "gastos por sacrificio y fallecimiento",
          "cobertura",
          "fondo mínimo garantizado",
          "fondo estimado",
          "beneficio fiscal",
        ];
        if (
          altsChiquito.some((altChiquito) => altChiquito === alt.toLowerCase())
        ) {
          tamaño = "w-8 lg:w-6 h-16";
        } else if (
          altsGrande.some((altGrande) => altGrande === alt.toLowerCase())
        ) {
          tamaño = "w-20 h-16";
        } else if (
          altsMediano.some((altMediano) => altMediano === alt.toLowerCase())
        ) {
          tamaño = "h-16 lg:w-10";
        } else if (
          altsAnchos.some((altAncho) => altAncho === alt.toLowerCase())
        ) {
          tamaño = "w-15";
        } else {
          tamaño += " w-1/3 lg:w-1/5";
        }
      }

      if (!last && fondoFuturo) {
        return (
          <div
            className={`div__swiper-slide swiper-slide my-2 lg:my-2 ${
              length >= 4 ? "lg:w-1/4" : "lg:w-1/3"
            } ${conoceMas && "previous"}`}
            key={id}
          >
            <CubreSlideFondo
              dataRow={row}
              extraData={{
                tamaño,
                listPosition,
                device,
                usarSeguroReady,
                jsonObjectKeysLength: Object.keys(json).length,
                isLast: !json[Object.keys(json).length - 1].last,
              }}
            />
          </div>
        );
      }
      if (!last) {
        let rowContent;
        switch (homekey.key) {
          case "bici":
            rowContent = bici.filter((h) => h.id == row.id);
            break;
          case "hogar":
            rowContent = hogar.filter((h) => h.id == row.id);
            break;
          case "pyme":
            rowContent = pyme.filter((h) => h.id == row.id);
            break;
          case "pymeIntegral":
            rowContent = pymeIntegral.filter((h) => h.id == row.id);
            break;

          default:
            // rowContent = json.body;
            break;
        }
        // let rowContent = hogar.filter((h) => h.id == row.id);
        return (
          <div
            className={`div__swiper-slide swiper-slide my-2 ${
              mascotas ? "lg:my-2" : "lg:my-0"
            } ${length >= 4 ? "lg:w-1/4" : "lg:w-1/3"} ${
              conoceMas && "previous"
            }`}
            key={id}
          >
            <CubreSlideCard
              dataRow={rowContent[0]}
              extraData={{
                tamaño,
                listPosition,
                device,
                usarSeguroReady,
                jsonObjectKeysLength: Object.keys(json).length,
                isLast: !json[Object.keys(json).length - 1].last,
              }}
            />
          </div>
        );
      }

      return null;
    });

    const rowLast = json.map((row) => {
      const { id, last, textLast, linkOneLine, rarePadding } = row;
      let { tamaño } = row;
      if (!tamaño) {
        tamaño = "h-16";
      }
      if (last) {
        this.last = true;
        return (
          <div
            className="my-2 text-white shadow-md div__swiper-slide swiper-slide swiper-slide__last lg:shadow lg:rounded-xl lg:mt-24 lg:pt-8 lg:pb-6 lg:px-5 lg:relative lg:mb-20 lg:mx-5"
            key={id}
          >
            {device === "desktop" && (
              <div className="absolute z-20 slide__last-desktop-orange">
                <h2 className="py-2 pl-12 pr-32 text-base text-left menu__last__titulo-desktop montserrat-m">
                  {orangeText1}
                  <br />
                  <span className={bold === true && "montserrat-b"}>
                    {orangeText2}
                  </span>
                </h2>
              </div>
            )}
            <div className="relative my-2 main__section__header lg:flex lg:ml-4">
              <div className="p-2 text-center section__header__father-h1">
                <h2 className="w-5/6 text-xl break-normal lg:w-full montserrat-b section__header__titulo__last">
                  {textLast}
                </h2>
              </div>
              <div className="father__bg-lineas-diagonales lg:flex lg:items-center">
                <div className="flex items-center justify-end w-full">
                  <div className="w-24 bg-lineas-diagonales__last" />
                </div>
              </div>
            </div>
            <div className="px-4 pb-8 main__section__wrapper main__section__wrapper__last lg:pb-0 lg:px-0">
              {device === "mobile" ? (
                <ul
                  className={`wrapper__last-ul list-disc list-outside text-left relative ${
                    linkOneLine && "pb-10"
                  } ${rarePadding ? "pr-8 pl-2" : "pl-4"}`}
                >
                  {last.map((row) => {
                    const { id } = row;
                    const { texto } = row;
                    if (Object.keys(last).length - 1 === id) {
                      return (
                        <li className="text-base wrapper__last-li" key={id}>
                          <p>{texto}</p>
                          <div
                            className={
                              !linkOneLine
                                ? "animated late pr-2 mt-4 text-yellow-400"
                                : "animated late text-yellow-400 absolute w-full left-0 text-center mt-4 leading-none bottom-0"
                            }
                          >
                            <a href="tel:08005559998">0800 555 9998</a>
                          </div>
                        </li>
                      );
                    }
                    return (
                      <li className="text-base wrapper__last-li" key={id}>
                        {texto}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul
                  className={`grid grid-cols-${
                    last.length + 1
                  } gap-4 ml-4 text-sm text-left list-disc list-outside wrapper__last-ul`}
                >
                  {last.map((row) => {
                    const { id } = row;
                    const { texto } = row;
                    return (
                      <div className="flex justify-around" key={id}>
                        <li className="wrapper__last-li lg:list-none lg:flex lg:items-center">
                          {texto}
                        </li>
                        {last.lenght !== id && (
                          <div className="flex items-center justify-center w-3">
                            <img
                              className="h-12"
                              alt="whiteBar"
                              src={whiteBar}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <li className="flex items-center justify-center list-none wrapper__last-li">
                    <div className="pr-2 mt-4 text-center text-yellow-400 animated late lg:mt-0 lg:pr-0 lg:text-xs">
                      <a
                        href="tel:08005559998"
                        className="truncate hover:underline"
                      >
                        Contáctanos al <br></br>0800 555 9998 <br></br>de Lunes
                        a Viernes <br></br>de 9 a 19 hs
                      </a>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        );
      }
      return null;
    });

    return (
      <div className="swiper-wrapper div__swiper-wrapper lg:flex lg:justify-around lg:flex-col lg:w-full lg:pb-4">
        {device === "mobile" ? (
          <>
            {rows}
            {rowLast}
          </>
        ) : (
          <>
            <div className="flex-wrap lg:flex lg:justify-center lg:h-auto lg:mx-2 lg:z-20">
              {rows}
            </div>
            {rowLast}
          </>
        )}
      </div>
    );
  }
}

export default CubreSlide;
