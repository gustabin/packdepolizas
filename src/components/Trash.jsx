/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import React from 'react';

class Oculta extends React.Component {
  render() {
    return (
      <section className='main__siniestro relative'>
        <div className='cuadradoNaranja w-16 h-16 opacity-75 absolute ml-4' />
        <div className='flex justify-end'>
          <img className='mb-2 mr-4' src='./src/images/arrowPrevencionMedium.png' alt='arrow Prevencion' />
        </div>
        <div className='ml-10 flex bg-gray'>
          <p className='flex items-center mx-4 text-2xl montserrat-eb text-dark-blue'>1.</p>
          <div className='montserrat-l'>
            <h2 className='text-xl pt-5 text-dark-blue'>
¿Qué hacer
              <br />
              <span className='montserrat-b'>ante un siniestro?</span>
            </h2>
            <p className='text-sm pr-16 pb-2 text-gray'>Comunicate al Centro de Atención al Cliente dentro de las 72 horas de ocurrido el siniestro, llamando al 0800 555 9998 de lunes a viernes de 9 a 20hs</p>
          </div>
        </div>
        <div className='swiper-pagination w-full left-0 mt-2 swiper-pagination-bullets'>
          <span className='swiper-pagination-bullet swiper-pagination-bullet-active' />
          <span className='swiper-pagination-bullet' />
          <span className='swiper-pagination-bullet' />
        </div>
        <hr className='my-10 mx-4' />
      </section>
    );
  }
}

{ /*<div className="lg:h-screen">
                <section className="main__productos lg:mx-48">
                    <div className="productos__header relative text-center lg:text-left">
                        <div className="bg-lineas-rectas ml-2 h-4 w-5/6 absolute lg:ml-6 lg:w-1/4"></div>
                        <h3 className="text-white px-3 pt-4 pb-2 lg:text-2xl lg:ml-20 lg:pb-8">¿Conocés todos los productos <br className="hidden lg:block"/>
                            <span className="lg:ml-24">que tenemos para garantizar
                            tu protección?</span></h3>
                    </div>
                    <div className='relative lg:hidden'>
                        <div className='mt-2 w-1/2 flex items-end flex-col pl-3 mb-12'>
                            <a href="https://www.galiciaseguros.com.ar/segurosparavos/accidentespersonales">
                                <img className='w-48 my-2' src="./src/images/seguroAccidentes.png" alt="Seguro Accidentes"/>
                            </a>
                            <img className='w-48 my-2' src="./src/images/seguroDesempleo.png" alt="Seguro Desempleo"/>
                            <img className='w-48 my-2' src="./src/images/SeguroSalud.png" alt="Seguro Salud"/>
                            <a href="https://www.galiciaseguros.com.ar/segurosparavos/vida">
                                <img className='w-48 my-2' src="./src/images/SeguroVida.png" alt="Seguro Vida"/>
                            </a>
                            <img className='w-48 my-2' src="./src/images/roboCelular.png" alt="Robo De Celular"/>
                            <a href="https://www.galiciaseguros.com.ar/segurosparatuscosas/roboviapublica">
                                <img className='w-48 my-2' src="./src/images/roboPublica.png" alt="Robo en vía pública"/>
                            </a>
                        </div>
                        <div className='absolute top-0 right-0 float-right pr-3 flex items-end flex-col w-1/2'>
                            <div className='mt-10'>
                                <a href="https://www.galiciaseguros.com.ar/segurosparatupyme/integralpyme">
                                    <img className='w-48 my-4' src="./src/images/SeguroPyme.png" alt="Seguro Integral Pyme"/>
                                </a>
                                <a href="https://www.galiciaseguros.com.ar/segurosparavos/fondofuturo">
                                    <img className='w-48 my-4' src="./src/images/fondoFuturo.png" alt="Fondo Futuro"/>
                                </a>
                                <a href="https://www.galiciaseguros.com.ar/segurosparatuscosas/bicicleta">
                                    <img className='w-48 my-4' src="./src/images/roboBici.png" alt="Robo de Bici"/>
                                </a>
                                <img className='w-48 my-4' src="./src/images/caminoProtegido.png" alt="Camino Protegido"/>
                                <a href="https://www.galiciaseguros.com.ar/segurosparatuscosas/tecnoportatil">
                                    <img className='w-48 mt-6' src="./src/images/proteccionPortatil.png" alt="Protección Tecno Portátil"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">

                    </div>
                </section>
                <section className='main__comunicate px-3 mb-5 lg:flex lg:justify-center'>
                    <div className="hidden lg:block">
                        <button className="rounded-full orangeGalcia text-4xl montserrat-b text-white px-4 py-2">¡Contrata tu seguro!</button>
                    </div>
                    <div className="lg:ml-8">
                        <div className="bg-lineas-rectas h-1 w-full lg:hidden"></div>
                        <p className='mt-3 text-gray montserrat-r'>Comunicate con nuestro</p>
                        <h2 className='text-dark-blue montserrat-b'>CENTRO DE VENTA TELEFÓNICA</h2>
                        <div className='flex'>
                            <img className='h-16' src="./src/images/phone5.png" alt="Telefono"/>
                            <div className='flex justify-center flex-col ml-4'>
                                <a className="cursor-pointer" href="tel:08005559797" className='text-dark-blue montserrat-eb text-xl'>0800 555 9797</a>
                                <p className='text-gray montserrat-l'>Lunes a viernes de 9 a 21 hs.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>*/ }
