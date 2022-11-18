import React from 'react';
import '../assets/styles/components/Llamar.scss';
import phone from '../assets/static/phone4.png';

const Llamar = (props) => {
  const { alt, hrefTel, tel, horario, es } = props;
  return (
    <div className='flex lg:h-full lg:items-center'>
      <img className='w-12 h-12 contacto__burbuja-phone' src={phone} alt={alt} />
      <div className='flex-col pl-1 lg:w-full'>
        <p><a className='no-underline cursor-pointer num montserrat-eb' href={hrefTel}>{tel}</a></p>
        <p className='horario montserrat-l'>
          {horario}
        </p>
        {es === '0' && (
          <>
            <p><a className='text-sm contacto__email montserrat-l text-gray lg:break-words' href='mailto:infogalicia@galiciaseguros.com.ar'>infogalicia@galiciaseguros.com.ar</a></p>
            <a className='text-sm contacto__email montserrat-l text-gray lg:break-words' href='https://www.facebook.com/GaliciaSeguros'>www.facebook.com/GaliciaSeguros</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Llamar;
