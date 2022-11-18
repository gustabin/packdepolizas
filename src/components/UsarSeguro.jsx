import React from "react";
import tel from "../assets/static/ICONO TELEFONO.png";
import web from "../assets/static/ICONO WEB.png";
import face from "../assets/static/ICONO FACEBOOK.png";
import mail from "../assets/static/ICONO MAIL.png";
import wp from "../assets/static/icono whatsapp.png";
import json from "../jsons/json/usarSeguro.json";

const UsarSeguro = () => {
  const {
    lapsoTiempo,
    wpText = "WhatsApp",
    noWpLink,
    telCall = "0800-555-9998",
    telDays = "lunes a viernes",
    telHours = "9 a 19 hs.",
    email = "infogalicia@galiciaseguros.com.ar",
    firstPart,
  } = json;

  return (
    <div className="px-2 mb-12 usarSeguro lg:px-0 lg:mb-24">
      <h2 className="mb-2 text-lg text-center montserrat-b lg:text-2xl">
        ¿Qué hacer en caso que tengas que usar el seguro?
      </h2>
      <p className="mb-8 text-sm text-center montserrat-l">
        {`${firstPart || "Se tienen que contactar"}`} con nosotros, dentro de{" "}
        {lapsoTiempo} de ocurrido el hecho, por alguno de estos medios:
      </p>
      <div className="grid grid-cols-1 row-gap-10 col-gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-4 lg:text-sm">
        <div className="text-center">
          {noWpLink ? (
            <div className="montserrat-b">
              <div className="h-12">
                <img
                  className="object-contain w-full h-full"
                  src={wp}
                  alt="WhatsApp"
                />
              </div>
              <div className="mt-3 text-center">
                <p>{wpText}</p>
                <p>{telCall}</p>
              </div>
            </div>
          ) : (
            <button type="button" className="montserrat-b">
              <div className="h-12">
                <img
                  className="object-contain w-full h-full"
                  src={wp}
                  alt="WhatsApp"
                />
              </div>
              <div className="mt-3 text-center">
                <p>{wpText}</p>
                <p>54 -9-11-3254-8281</p>
              </div>
            </button>
          )}
        </div>
        <div className="text-center">
          <button type="button" className="montserrat-b">
            <div className="h-12">
              <img
                className="object-contain w-full h-full"
                src={web}
                alt="Web"
              />
            </div>
            <div className="mt-3 text-center break-all">
              <p>www.galiciaseguros.com.ar</p>
            </div>
          </button>
        </div>
        <div className="text-center">
          <button type="button" className="montserrat-b">
            <div className="h-12">
              <img
                className="object-contain w-full h-full"
                src={face}
                alt="Facebook"
              />
            </div>
            <div className="mt-3 text-center">
              <p>/GaliciaSeguros</p>
            </div>
          </button>
        </div>
        <div className="text-center">
          <button type="button" className="montserrat-b">
            <div className="h-12">
              <img
                className="object-contain w-full h-full"
                src={mail}
                alt="Email"
              />
            </div>
            <div className="mt-3 text-center break-all">
              <p>{email}</p>
            </div>
          </button>
        </div>
        <div className="text-center">
          <button type="button" className="montserrat-b">
            <div className="h-12">
              <img
                className="object-contain w-full h-full"
                src={tel}
                alt="Telefono"
              />
            </div>
            <div className="mt-3 text-center">
              <p>{telCall}</p>
              <div className="text-sm montserrat-l">
                <p>{telDays}</p>
                <p>{telHours}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsarSeguro;
