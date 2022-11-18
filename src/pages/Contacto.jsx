import React from 'react';
import '../assets/styles/components/Contacto.scss';
import VentaCliente from '../components/VentaCliente';
import contactoDsk from '../assets/static/contacto_dsk.png';
import phone from '../assets/static/phone5.png';
import contacto from '../assets/static/contacto.jpg';

class Contacto extends React.Component {
  componentDidMount() {
    const tamaño = document.querySelector('main').clientWidth;
    if (tamaño <= 340) {
      document.querySelector('.contacto__titulo').style.fontSize = '1.75rem';
    }
  }

  render() {
    const { device } = this.props;
    return (
      <main className='contacto animated fadeIn lg:relative lg:mb-12'>
        <div className='relative block lg:hidden'>
          <img id='image1' className='w-full' src={contacto} alt='Contacto' />
          <img id='image2' className='absolute' src={phone} alt='Tel' />
        </div>
        <div className='relative hidden lg:block lg:h-56 div-img-desktop'>
          <img id='image3' className='object-cover w-full h-full lg:rounded-lg' src={contactoDsk} alt='Contacto Dsk' />
          <div className='absolute top-0 inline-flex pt-2 pl-2'>
            <img id='image4' className='relative' src={phone} alt='Tel' />
            <h1 className='flex items-center montserrat-b'>CONTACTANOS</h1>
          </div>
          <div className='relative hidden ml-40 lg:block'>
            <div className='pb-3 lg:absolute bg__lineas-dekstop'>
              <div className='w-1/4 bg-lineas' />
            </div>
          </div>
        </div>
        <div className='justify-end block pb-3 lg:hidden'>
          <div className='items-end'>
            <h1 className='pt-3 pb-1 pr-3 text-right montserrat-b contacto__titulo'>CONTACTANOS</h1>
          </div>
        </div>
        <div className='justify-end block pb-3 lg:hidden'>
          <div className='w-10/12 bg-lineas' />
        </div>
        <div className='hidden lg:block lg:absolute opciones__contacto lg:w-full lg:h-full lg:items-center'>
          <div className='grid grid-cols-3 pt-8 lg:pt-0 lg:w-full lg:mt-4'>
            <div className='col-span-1'>
              <div id='Radius' className='px-6 py-2 contacto__burbuja shadow-base lg:h-full lg:bg-white lg:ml-2 lg:opacity-85'>
                <VentaCliente device={device} es='0' />
              </div>
            </div>
            <div className='col-span-1'>
              <div id='Radius' className='px-6 py-2 ml-8 contacto__burbuja shadow-base lg:h-full lg:bg-white lg:opacity-85'>
                <VentaCliente device={device} es='1' />
              </div>
            </div>
            <div className='col-span-1'>
              <div id='Radius' className='px-6 py-2 ml-8 contacto__burbuja shadow-base lg:h-full lg:bg-white lg:mr-2 lg:opacity-85'>
                <VentaCliente device={device} es='2' />
              </div>
            </div>
          </div>
        </div>
        <div className='block lg:hidden'>
          <div className='flex flex-col'>
            <VentaCliente device={device} es='0' />
            <hr />
            <VentaCliente device={device} es='1' />
          </div>
        </div>
      </main>
    );
  }
}

export default Contacto;
