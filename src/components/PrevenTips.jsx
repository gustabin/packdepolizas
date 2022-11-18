import React from "react";
import "../assets/styles/components/PrevenTips.scss";
import { preventips } from "../jsons/cubreSlide";
import { changeDevice } from "../funciones";

const PrevenTips = (props) => {
  const { textExeption, infoParent, isInformacion } = props;
  const {
    alt,
    className,
    img,
    imgDesktop,
    imgSecondary,
    imgDesktopSecondary,
    desktopClassName,
  } = preventips;

  const image = isInformacion && imgSecondary ? imgSecondary : img;
  const clases = [];
  let { texto } = preventips;
  if (textExeption) {
    texto = null;
  }
  if (!texto) {
    texto = "#Preventips";
    clases[0] = "lg:ml-64";
    clases[1] = "lg:mr-64";
    clases[2] = "text-lg py-1";
    clases[3] = "ml-10 lg:ml-24";
  } else {
    clases[0] = "lg:ml-32";
    clases[1] = "lg:mr-16";
    clases[2] = "text-xs py-2";
    clases[3] = "ml-8 lg:ml-18";
  }
  const bgImage =
    isInformacion && imgDesktopSecondary ? imgDesktopSecondary : imgDesktop;
  return (
    <div className="lg:w-full lg:flex lg:justify-end" id="prevencion">
      {changeDevice() === "mobile" || !infoParent ? (
        <img
          className={`lg:object-contain lg:h-25vh ${className} w-full h-48 mx-auto lg:mx-0`}
          src={require(`../assets/static/${image || ""}`).default}
          alt={alt}
        />
      ) : (
        <div
          className={`lg:bg-no-repeat lg:w-full lg:h-64 xl:h-70 ${
            desktopClassName || "bg-cover bg-top"
          }`}
          style={{
            backgroundImage: `url(${
              require(`../assets/static/${bgImage || ""}`).default
            })`,
          }}
        />
      )}
      <div className="relative main__preventips__flotante lg:static">
        <div className="absolute flex w-full py-2 bottom-2 lg:right-0 lg:flotante lg:px-0 lg:py-0 lg:z-10">
          <div
            className={`flotante__lineas w-2/6 relative flex items-center lg:w-4/6 ${clases[0]}`}
          >
            <div className="absolute bg-lineas-diagonales" />
          </div>
          <div className={`${clases[1]} w-4/6 z-10`}>
            <div
              className={`flotante__texto h-1/2 w-full text-white ${clases[2]} lg:text-xl xl:text-3xl lg:text-right lg:pr-4 bg-red-transparent`}
            >
              <p className={clases[3]}>{texto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevenTips;
