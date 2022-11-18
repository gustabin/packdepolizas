import React from "react";
import ButtonLink from "./ButtonLink";
import CubreBabySwiper from "./CubreBabySwiper";

const CubreSlideCard = ({ dataRow, extraData }) => {
  if (dataRow.alt == "Robo") {
    dataRow.texto =
      "Si te roban la bici, tenés disponible una suma asegurada para reponerla.";
  }
  if (dataRow.alt == "Bici") {
    dataRow.texto =
      "Con tu seguro estás cubierto las 24 hs a lo largo y ancho del país. Así que solo preocupate por elegir tu recorrido y…¡a rodar y despejar!";
  }
  if (dataRow.alt == "remove") {
    dataRow.texto =
      "-El hurto, pérdida o extravío no están alcanzados por esta cobertura. <br> -Robo de los accesorios de la bici (no cubre casco, candado, etc).";
  }

  const {
    id,
    img,
    alt,
    titulo,
    titulo2,
    texto,
    lista,
    conoceMas,
    doubleList,
    textFooter,
    hasUsarSeguro,
    changeColor,
    slides,
  } = dataRow;
  const {
    tamaño,
    listPosition,
    device,
    usarSeguroReady,
    jsonObjectKeysLength,
    isLast,
  } = extraData;

  return (
    <div
      className={`div__swiper-slide-child ${
        changeColor ? "bg-gradient-red" : "bg-white"
      } shadow-md lg:shadow h-1/2 lg:rounded-xl lg:mr-4 ${
        id === 0 && "lg:ml-4"
      }`}
    >
      <div className="mt-1 main__section__header lg:mt-0">
        <div className="relative flex justify-center lg:h-auto">
          <div
            className={`${tamaño} h-16 lg:h-auto flex justify-center lg:items-center father__header__img father__header__img${id} mt-4`}
          >
            <img
              className="object-contain"
              src={
                img.includes("base64")
                  ? img
                  : require(`../assets/static/${img}`).default
              }
              alt={alt}
            />
          </div>
          <div className="absolute flex items-center justify-end w-full h-full">
            <div className="w-1/3">
              <div className="w-full mt-8 bg-lineas-diagonales" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-8 mt-2 main__section__wrapper">
        <h2
          className={`mb-4 text-xl lg:text-lg montserrat-b ${
            changeColor ? "text-white" : "text-dark-gray"
          } ${
            alt === "Asistencia de Enfermedades" ? "pt-4" : null
          } section__header__titulo`}
        >
          {titulo2 ? (
            <>
              {dataRow.titulo} <br className="lg:hidden" />
              {dataRow.titulo2}
            </>
          ) : (
            <b>{dataRow.titulo}</b>
          )}
        </h2>
        <p
          className={`text-base lg:text-sm montserrat-l ${
            changeColor ? "text-white" : "text-gray"
          } section__wrapper__description ${listPosition}`}
          dangerouslySetInnerHTML={{ __html: texto }}
        />

        {slides && (
          <div>
            <CubreBabySwiper slides={slides} />
          </div>
        )}
        {conoceMas ? (
          <div className="mt-6 text-base section__wrapper-link lg:mb-2 montserrat-m lg:text-sm animated late">
            {device === "mobile" ? (
              <ButtonLink
                className="cursor-pointer slide__link-conoce hover:underline"
                to="/home/asistencia"
              >
                CONOCÉ MAS
              </ButtonLink>
            ) : (
              <button
                type="button"
                className="cursor-pointer slide__link-conoce hover:underline"
                onClick={() => {
                  document
                    .querySelector(".asistencias")
                    .scrollIntoView({ block: "start", behavior: "smooth" });
                }}
              >
                CONOCÉ MAS
              </button>
            )}
          </div>
        ) : (
          ((!usarSeguroReady &&
            isLast &&
            jsonObjectKeysLength === parseInt(id, 10) + 1) ||
            hasUsarSeguro) && (
            <div className="mt-6 text-base section__wrapper-link lg:mb-2 montserrat-m lg:text-sm animated late">
              {device === "mobile" ? (
                <ButtonLink
                  className="cursor-pointer slide__link-conoce hover:underline"
                  to="/home/cobrarSeguro"
                >
                  Usar el seguro
                </ButtonLink>
              ) : (
                <button
                  type="button"
                  className="cursor-pointer slide__link-conoce hover:underline"
                  onClick={() => {
                    document
                      .querySelector(".cobrar")
                      .scrollIntoView({ block: "start", behavior: "smooth" });
                  }}
                >
                  Usar el seguro
                </button>
              )}
            </div>
          )
        )}
        {textFooter && (
          <div>
            <p
              className={`text-xs montserrat-l ${
                changeColor ? "text-white" : "text-gray"
              } section__wrapper__description mt-2 ${listPosition}`}
              dangerouslySetInnerHTML={{ __html: textFooter }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CubreSlideCard;
