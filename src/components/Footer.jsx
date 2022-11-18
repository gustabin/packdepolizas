import React from 'react';
import '../assets/styles/components/Footer.scss';
import logo from '../assets/static/logo.png';
import facebook from '../assets/static/facebook.png';
import linkedin from '../assets/static/linkedin.png';
import youtube from '../assets/static/youtube.png';
import logoSsn from '../assets/static/LOGO SSN.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className='lg:flex lg:h-14vh'>
        <div className='flex p-4 items-center lg:justify-center footer__header lg:w-1/2'>
          <div className='hidden lg:block w-24'>
            <img className='object-contain' src={logo} alt='Galicia Seguros Logo' />
          </div>
          <div className='footer-text-left w-2/6'>
            <div className='hidden lg:block mb-2'>
              <p className='montserrat-b text-center text-dark-gray'>¡Seguinos!</p>
            </div>
            <div className='flex justify-center'>
              <a className='w-8' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/GaliciaSeguros'>
                <img src={facebook} alt='Facebook' />
              </a>
              <a className='w-8 mx-4' target='_blank' rel='noopener noreferrer' href='https://cl.linkedin.com/company/galicia-seguros-grupo-financiero-galicia-banco-galicia-'>
                <img src={linkedin} alt='Linkedin' />
              </a>
              <a style={{ width: '1.75rem', marginLeft: '0.15rem', }} target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCazMzLHs9UTit9wDShfE2_g'>
                <img src={youtube} alt='Youtube' />
              </a>
            </div>
            <div className='text-center'>
              <a className='montserrat-m text-gray text-xs cursor-pointer' href='https://www.galiciaseguros.com.ar'>galiciaseguros.com.ar</a>
            </div>
          </div>
          <div className='footer-text-right montserrat-l text-gray text-right w-4/6 lg:w-2/6 text-xs lg:text-center'>
            <p>Leiva 4070, 6to piso. Capital Federal</p>
            <p>Nº de Inscripción en IGJ 12.571</p>
          </div>
        </div>
        <div className='flex items-center flex-col bg-dark-gray pt-4 px-16 text-center pb-2 lg:w-1/2 lg:footer__header'>
          <div className='max-w-xs'>
            <img className='lg:object-contain lg:h-10' src={logoSsn} alt='Logo SSN' />
          </div>
          <a href='https://www.argentina.gob.ar/ssn' className='montserrat-b text-dark-gray text-sm cursor-pointer'>www.argentina.gob.ar/ssn</a>
          <a href='tel:08006668400' className='montserrat-m text-dark-gray text-xs cursor-pointer'>
            <span className='hidden lg:initial'>ATENCIÓN AL ASEGURADO</span>
            0800-666-8400
          </a>
          <p className='montserrat-m text-dark-gray text-xxs'>Nº de Inscripción en SSN: 0589</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
