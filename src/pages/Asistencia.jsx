import React from "react";
import Swiper from "swiper";
import AsistenciaSlide from "../components/AsistenciaSlide";
import AsistenciaMascotas from "../components/AsistenciaMascotas";
import { changeDevice } from "../funciones";
import json from "../jsons/json/asistencia.json";
import { asistencia } from "../jsons/json/asistencia";
import "../assets/styles/components/Asistencia.scss";
import asistenciaImagen from "../assets/static/asistencia.png";
import phone from "../assets/static/phone4.png";
import wp from "../assets/static/icono whatsapp.png";
import ButtonLink from "../components/ButtonLink";
import homekey from "./../jsons/json/home.json";

class Asistencia extends React.Component {
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
    const { titulo } = rows[0];

    super(props);
    this.state = {
      numero: 1,
      texto: titulo,
      elementos: rows,
    };
  }

  componentDidMount() {
    const device = changeDevice();
    const { elementos } = this.state;
    let rows = elementos;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line no-unused-vars
        const swiperInfo = new Swiper(".info__swiper-container", {
          spaceBetween: 50,
          pagination: {
            el: ".swiper-pagination-a",
            clickable: true,
            renderBullet(index, className) {
              const { titulo } = rows[index];

              if (device === "mobile") {
                return `<span class="bullets-style ${className} hover-all hover:scale-1">${
                  index + 1
                }</span>`;
              }
              return `<div class="bullets-parent flex items-center ${className} hover-all hover:scale-1 lg:z-30 lg:relative">
                <span class="bullets-style p-2">${index + 1}</span>
                <p class="mb-2 montserrat-b lg:red-color ml-2">${titulo}</p>
              </div>`;
            },
          },
        });
        swiperInfo.on("slideNextTransitionStart", () => {
          for (let i = 0; i < rows.length; i++) {
            if (
              document
                .querySelector(".swiper-slide-active")
                .classList.contains(`swiper-slide-${i}`)
            ) {
              this.setState({
                numero: i + 1,
                texto: rows[i].titulo,
              });
              break;
            }
          }
        });
        swiperInfo.on("slidePrevTransitionStart", () => {
          for (let i = 0; i < rows.length; i++) {
            if (
              document
                .querySelector(".swiper-slide-active")
                .classList.contains(`swiper-slide-${i}`)
            ) {
              this.setState({
                numero: i + 1,
                texto: rows[i].titulo,
              });
              break;
            }
          }
        });
        resolve(1);
      }, 100);
    }).then(() => {
      const bullets = document.querySelectorAll(".bullets-parent");
      for (let i = 0; i < bullets.length; i++) {
        const element = bullets[i];
        element.addEventListener("click", () => {
          this.changeStates(i);
        });
      }
    });
  }

  changeStates(posicion) {
    const { titulo } = rows[posicion];
    this.setState({
      numero: posicion + 1,
      texto: titulo,
    });
  }

  render() {
    const device = changeDevice();
    const { texto, numero, elementos } = this.state;
    // const { hasWp, title, linkConoce, mascotas, fondoFuturo, titleSecond } =
    //   json;
    const { hasWp, title, linkConoce, mascotas, fondoFuturo, titleSecond } =
      elementos;
    return (
      <>
        {fondoFuturo ? (
          <main className="overflow-hidden asistencias info animated fadeIn lg:border-solid lg:border-t lg:border-gray-300">
            <div className="info__div-child-fondo lg:flex lg:relative lg:border-b-2 lg:border-gray-200 lg:mb-12">
              <div className="relative grid grid-cols-4 pt-2 info__child lg:w-5/12 lg:z-10 lg:flex">
                <div
                  className="flex content-center col-span-3 lg:ml-4"
                  id="Logo"
                >
                  <div>
                    <img
                      className="p-2 info__principal-img lg:object-contain"
                      src={asistenciaImagen}
                      alt="Info"
                    />
                  </div>
                  {titleSecond ? (
                    <h1 className="p-2 ml-2 text-2xl leading-none info__principal-tittle text-dark-gray">
                      <div>
                        {title}
                        {titleSecond}
                      </div>
                    </h1>
                  ) : (
                    <h1 className="p-2 ml-2 text-2xl leading-none info__principal-tittle text-dark-gray">
                      {title || (
                        <p>
                          Asistencias para
                          <br />
                          tu casa
                        </p>
                      )}
                    </h1>
                  )}
                </div>
                <div className="absolute right-0 col-span-1 info__header lg:relative lg:mt-2">
                  <div className="flex content-end justify-end w-full h-10">
                    <div className="w-40 h-10 cuadrado" />
                  </div>
                  <div className="absolute flex justify-end w-full h-8 info__header__linea">
                    <div className="w-1/2 lg:w-full" id="linea-diagonal" />
                  </div>
                </div>
              </div>
              <div className="relative z-20 flex flex-col content-center justify-center mx-3 mt-12 mb-6 overflow-y-auto text-sm bg-white rounded-lg shadow-lg lg:text-md lg:mb-0 lg:mx-12 lg:mt-24 h-72 lg:absolute top-32 bg-opacity-70 montserrat-l">
                <p className="px-2 py-4 text-center lg:px-20">
                  Inversiones de tu fondo: Una cartera equilibrada que incluye
                  bonos soberanos, letras del tesoro, obligaciones negociables,
                  entre otros, de acuerdo con lo establecido en el Reglamento
                  General de la Actividad Aseguradora punto 35.8.1.
                </p>
                <p className="px-2 py-4 text-center lg:px-20">
                  Vas a poder modificar el monto de tus aportes y su frecuencia
                  cuando quieras. ¡Incluso realizar aportes extraordinarios en
                  cualquier momento!
                </p>
                <p className="px-2 py-4 text-center lg:px-20">
                  Si al momento del retiro, elegís percibir una renta en lugar
                  de retirar el fondo, este continuará incrementándose
                  periódicamente de acuerdo a la rentabilidad obtenida por la
                  compañía.
                </p>
                <p className="px-2 py-4 text-center lg:px-20">
                  Podés retirar una parte o la totalidad del fondo en cualquier
                  momento. Solo tené en cuenta que podrías llegar a sufrir una
                  quita si lo hacés antes de la edad de retiro que declaraste.
                </p>
              </div>
            </div>
          </main>
        ) : (
          <main className="overflow-hidden asistencias info animated fadeIn lg:border-solid lg:border-t lg:border-gray-300">
            <div className="info__div-child lg:flex lg:relative lg:border-b-2 lg:border-gray-200 lg:mb-12">
              <div className="relative pt-2 info__child lg:w-4/12 lg:z-10 lg:flex">
                <div className="flex content-center lg:ml-4" id="Logo">
                  {!mascotas && (
                    <div>
                      <img
                        className="p-2 info__principal-img lg:object-contain"
                        src={asistenciaImagen}
                        alt="Info"
                      />
                    </div>
                  )}
                  <h1 className="p-2 ml-2 text-2xl leading-none info__principal-tittle text-dark-gray">
                    {title || (
                      <p>
                        Asistencias para
                        <br />
                        tu casa
                      </p>
                    )}
                  </h1>
                </div>
                <div className="absolute right-0 info__header lg:relative lg:mt-2">
                  <div className="flex content-end justify-end w-full h-10">
                    <div className="w-40 h-10 cuadrado" />
                  </div>
                  <div className="absolute flex justify-end w-full h-8 info__header__linea">
                    <div className="w-1/2 lg:w-full" id="linea-diagonal" />
                  </div>
                </div>
              </div>
              <div className="hidden lg:absolute lg:left-0 lg:h-full lg:flex lg:items-center lg:z-10 lg:w-1/3">
                <p className="text-6xl text-red-800 info__left-text lg:montserrat-b lg:ml-6">
                  {numero}
                </p>
                <h3 className="ml-4 text-2xl leading-tight info__left-title lg:montserrat-b">
                  {texto}
                </h3>
              </div>
              <div className="mx-6 my-6 lg:w-8/12 lg:mx-0 lg:mt-0 lg:mb-0 lg:flex">
                <div className="info__swiper-parent lg:ml-12 lg:mt-6 lg:mb-12 lg:w-2/3 lg:flex lg:flex-col-reverse">
                  <div className="container flex justify-center h-full info__swiper-container">
                    {mascotas ? <AsistenciaMascotas /> : <AsistenciaSlide />}
                  </div>
                  <div className="relative">
                    <hr className="hidden info__swiper-hr lg:block lg:absolute lg:w-full lg:z-10" />
                    <hr className="hidden lg:block lg:absolute lg:w-full lg:z-10" />
                  </div>
                  <div className="left-0 w-full mt-2 swiper-pagination-a swiper-pagination-asistencia lg:w-auto lg:flex-col lg:z-10 lg:ml-4" />
                </div>
                <div className={mascotas ? "div-tapar-mascota" : "div-tapar"} />
              </div>
            </div>
            <hr className="mx-6 mt-6 mb-4 separador lg:hidden" />
            {!mascotas && (
              <div className="mx-4 info__middle lg:bg-white">
                <div className="info__middle-child lg:grid lg:grid-cols-3 lg:gap-4">
                  <div className="middle-child-asist">
                    <h1 className="text-2xl text-center info__middle-tittle text-dark-gray">
                      ¿Cómo pido asistencia?
                    </h1>
                    <div className="hidden h-1 lg:inline-flex lg:justify-center lg:ml-4 lg:w-full">
                      <div className="w-48 h-full bg-black rounded-full" />
                      <div className="w-8 h-full ml-6 bg-black rounded-full" />
                    </div>
                  </div>
                  {hasWp ? (
                    <div className="flex flex-col lg:justify-center lg:items-center">
                      <div className="flex lg:justify-center lg:items-center">
                        <img
                          className="w-12 h-12 lg:w-18 lg:h-18"
                          src={phone}
                          alt="Atencion al Cliente"
                        />
                        <div className="flex-col pl-2">
                          <p>
                            <button
                              type="button"
                              id="num"
                              className="no-underline text-dark-gray montserrat-eb lg:text-lg"
                            >
                              0800 555 CASA (2272)
                            </button>
                          </p>
                          <p className="text-sm text-gray montserrat-l lg:text-base">
                            Llamá las 24hs, los 365 días del año y solicitá el
                            servicio que necesitás.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-4 lg:justify-center lg:items-center">
                        <img
                          className="object-contain w-12 h-12 lg:w-18 lg:h-18"
                          src={wp}
                          alt="Atencion al Cliente"
                        />
                        <div className="flex-col pl-2">
                          <p className="no-underline text-dark-gray montserrat-eb lg:text-lg">
                            Estamos en Whatsapp
                          </p>
                          <p className="text-sm text-gray montserrat-l lg:text-xs">
                            Contás con un asesor personalizado a través de
                            WhatsApp para que puedas gestionar todo lo que
                            necesites de tu seguro.
                            <br />
                            Tranquilo, nosotros te contactamos para que nos
                            agendes.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex lg:justify-center lg:items-center">
                      <img
                        className="w-12 h-12 lg:w-18 lg:h-18"
                        src={phone}
                        alt="Atencion al Cliente"
                      />
                      <div className="flex-col pl-2">
                        <p>
                          <button
                            type="button"
                            id="num"
                            className="no-underline text-dark-gray montserrat-eb lg:text-lg"
                          >
                            0800 555 CASA (2272)
                          </button>
                        </p>
                        <p className="text-sm text-gray montserrat-l lg:text-base">
                          Llamá las 24hs, los 365 días del año y solicitá el
                          servicio que necesitás.
                        </p>
                      </div>
                    </div>
                  )}
                  <hr className="block mx-6 my-6 lg:hidden separador lg:mb-4" />
                  <div className="flex justify-center pb-3">
                    <a
                      href={`${
                        linkConoce ||
                        "https://www.galiciaseguros.com.ar/segurosparatuscosas/asistenciadomiciliariacondiciones"
                      }`}
                      target="_blanck"
                      className="px-1 py-2 mx-8 text-sm text-center text-red-800 bg-transparent border border-red-700 rounded-full lg:text-base info__button-condicion hover:bg-red-700 hover:text-white lg:px-2 hover:border-transparent lg:mx-4 montserrat-b animated late lg:hover:bg-transparent lg:bg-red-700 lg:hover:text-red-800 lg:text-white lg:hover:border-red-700 lg:border-transparent hover-all lg:flex lg:justify-center lg:items-center lg:h-16"
                    >
                      CONOCÉ LAS CONDICIONES PARA{" "}
                      <br className="hidden lg:block" />
                      ACCEDER AL SERVICIO
                    </a>
                  </div>
                </div>
                <hr className="hidden h-3 mx-6 my-6 lg:block separador lg:mb-4" />
              </div>
            )}
            {device === "mobile" && (
              <div className="flex justify-center lg:hidden">
                <ButtonLink className="w-12 back__button" to="/home/cubre">
                  <svg
                    className="object-contain back__img"
                    alt="back"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                  >
                    <g
                      fill="none"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="rgb(169,156,149)">
                        <path d="M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM51.2775,72.1325c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l34.4,34.4c0.645,0.67188 1.54531,1.04813 2.4725,1.04813c0.92719,0 1.8275,-0.37625 2.4725,-1.04813l34.4,-34.4c1.37063,-1.37062 1.37063,-3.57437 0,-4.945c-1.37062,-1.37062 -3.57437,-1.37062 -4.945,0l-31.9275,31.9275l-31.9275,-31.9275c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075z" />
                      </g>
                    </g>
                  </svg>
                </ButtonLink>
              </div>
            )}
          </main>
        )}
      </>
    );
  }
}

export default Asistencia;
