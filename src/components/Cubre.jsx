import React from "react";
import Swiper from "swiper";
import CubreSlide from "./CubreSlide";
import { changeDevice, animateCSS, viewportToPixels } from "../funciones";
import json from "../jsons/json/cubre.json";
import "swiper/swiper-bundle.css";
import "../assets/styles/components/Cubre.scss";

class Cubre extends React.Component {
  componentDidMount() {
    const device = changeDevice();
    const { hasLast, orangeText1, orangeText2, bold } = json;
    setTimeout(() => {
      if (
        document.querySelector(".menu__main-father") &&
        document.querySelector(".menu__main")
      ) {
        document.querySelector(".menu__main-father").style.height = `${
          document.querySelector(".menu__main").offsetHeight -
          viewportToPixels("35vh")
        }px`;
      }
    }, 0);
    window.onresize = () => {
      if (
        document.querySelector(".menu__main-father") &&
        document.querySelector(".menu__main")
      ) {
        document.querySelector(".menu__main-father").style.height = `${
          document.querySelector(".menu__main").offsetHeight -
          viewportToPixels("35vh")
        }px`;
      }
    };
    const tamañoWidth = document.querySelector("main").clientWidth;
    let tamaño = document.querySelector("main").clientHeight;
    if (device === "mobile") {
      const swiperMenu = new Swiper(".swiper-container-menu", {
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
        },
      });
      if (hasLast) {
        swiperMenu.on("slideNextTransitionStart", () => {
          const last = document.querySelector(".swiper-slide__last");
          if (last.classList.contains("swiper-slide-active")) {
            document
              .querySelector(".menu__background")
              .classList.replace("noGrayscale", "grayscale");
            const h1 = document.querySelector(".menu__titulo");
            animateCSS(".menu__titulo", "fadeOut ultraFaster", () => {
              animateCSS(".menu__titulo", "fadeIn ultraFaster");
              h1.classList.add(
                "menu__last__titulo",
                "text-left",
                "pl-12",
                "py-2",
                "w-9/12"
              );
              h1.innerHTML = `${orangeText1} <br><span class='${
                bold === true && "montserrat-b"
              }'>${orangeText2}</span>`;
            });
          }
        });
        swiperMenu.on("slidePrevTransitionStart", () => {
          const last = document.querySelector(".previous");
          if (last.classList.contains("swiper-slide-active")) {
            document
              .querySelector(".menu__background")
              .classList.replace("grayscale", "noGrayscale");
            const h1 = document.querySelector(".menu__titulo");
            animateCSS(".menu__titulo", "fadeOut ultraFaster", () => {
              animateCSS(".menu__titulo", "fadeIn ultraFaster");
              h1.classList.remove(
                "menu__last__titulo",
                "text-left",
                "pl-12",
                "py-2",
                "w-9/12"
              );
              const text = h1.textContent;
              h1.textContent = text.replace(text, "¿Que te cubrimos?");
            });
          }
        });
      }
      //Responsive (?
      const HEADER_TAM = 54;
      const orientationString =
        window.innerWidth > window.innerHeight ? "Landscape" : "Primary";
      tamaño += HEADER_TAM;
      if (orientationString === "Primary") {
        if (tamaño <= 640 || tamañoWidth <= 475) {
          document.querySelector(".main__body").classList.add("relative");
          document.querySelector(".swiper-pagination").style.bottom = "1.25rem";
          document.querySelector(".main__footer").classList.remove("mt-10");
          document
            .querySelector(".main__header")
            .classList.replace("mb-4", "mb-1");
        }
      }
    }
  }

  render() {
    const device = changeDevice();
    const { texto, imgPrincipal, imgDesktop, alt, classNameDesktop } = json;
    let { className } = json;
    if (!className) {
      className = "object-cover";
    }
    return (
      <main className="relative menu cubre animated fadeIn">
        <div>
          {device === "mobile" ? (
            <div className="relative">
              <img
                className={`cubre__img-walkman menu__background noGrayscale ${className} h-40vh object-bottom w-full lg:hidden`}
                src={require(`../assets/static/${imgPrincipal}`).default}
                alt={alt}
              />
            </div>
          ) : imgDesktop ? (
            <div className="relative">
              <img
                className={`cubre__img-walkman menu__background noGrayscale object-cover h-40vh w-full relative z-10 ${
                  classNameDesktop || "object-bottom"
                }`}
                src={require(`../assets/static/${imgDesktop}`).default}
                alt={alt}
              />
            </div>
          ) : (
            <div
              className="relative z-10 bg-center lg:bg-fixed lg:h-40vh lg:bg-no-repeat lg:bg-cover"
              style={{
                backgroundImage: `url(${
                  require(`../assets/static/${imgPrincipal}`).default
                })`,
              }}
            />
          )}
          <div className="relative menu__main-father">
            <section className="absolute flex flex-col justify-center w-full text-center menu__main">
              <div className="relative flex flex-col content-end justify-center w-full text-center lg:justify-start">
                <div className="absolute w-full mb-4 text-white main__header lg:top-0 lg:text-black lg:text-left lg:ml-12 lg:mt-4 lg:leading-none lg:w-auto lg:z-20">
                  <h1 className="text-3xl montserrat-m lg:montserrat-b menu__titulo lg:bg-transparent">
                    {texto}
                  </h1>
                  <div className="hidden h-1 lg:inline-flex">
                    <div className="w-48 h-full bg-black rounded-full" />
                    <div className="w-8 h-full ml-6 bg-black rounded-full" />
                  </div>
                </div>
                <div className="relative items-center mx-6 overflow-hidden main__body lg:static lg:mx-0 lg:flex lg:justify-center lg:60vh">
                  <section className="container flex justify-center h-full swiper-container-menu lg:h-screen">
                    <CubreSlide />
                  </section>
                  <div className="left-0 flex items-center justify-center w-full mt-2 swiper-pagination" />
                </div>
                {changeDevice() === "mobile" && (
                  <div className="relative flex justify-center mt-10 main__footer lg:hidden">
                    <button
                      type="button"
                      className="cursor-pointer goPrevencion animated late"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="50"
                        height="50"
                        viewBox="0 0 226 226"
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
                          <path d="M0,226v-226h226v226z" fill="none" />
                          <g fill="#ac1f2d">
                            <path d="M113,9.04c-57.36516,0 -103.96,46.59484 -103.96,103.96c0,57.36516 46.59484,103.96 103.96,103.96c57.36516,0 103.96,-46.59484 103.96,-103.96c0,-57.36516 -46.59484,-103.96 -103.96,-103.96zM113,18.08c52.47437,0 94.92,42.44562 94.92,94.92c0,52.47437 -42.44563,94.92 -94.92,94.92c-52.47437,0 -94.92,-42.44563 -94.92,-94.92c0,-52.47437 42.44562,-94.92 94.92,-94.92zM67.37625,94.77875c-0.19422,0.03531 -0.38844,0.08828 -0.565,0.14125c-1.695,0.30016 -3.05453,1.53609 -3.53125,3.17813c-0.47672,1.65969 0.01766,3.42531 1.27125,4.59062l45.2,45.2c0.8475,0.88281 2.03047,1.37719 3.24875,1.37719c1.21828,0 2.40125,-0.49437 3.24875,-1.37719l45.2,-45.2c1.80094,-1.80094 1.80094,-4.69656 0,-6.4975c-1.80094,-1.80094 -4.69656,-1.80094 -6.4975,0l-41.95125,41.95125l-41.95125,-41.95125c-0.93578,-1.00641 -2.29531,-1.51844 -3.6725,-1.4125z" />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Cubre;
