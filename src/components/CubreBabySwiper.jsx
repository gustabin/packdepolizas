import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '../assets/styles/components/CubreBabySwiper.css';
// import 'swiper/swiper-bundle.css';

const CubreBabySwiper = ({ slides }) => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container-baby', {
      navigation: {
        nextEl: '.swiper-button-next-baby',
        prevEl: '.swiper-button-prev-baby',
      },
      loop: true,
    });
    const interval = setInterval(() => {
      mySwiper.slideNext();
    }, 2500);
    mySwiper.once('touchStart', () => {
      clearInterval(interval);
    });
  }, []);
  return (
    <div className='w-full rounded-lg shadow-inner swiper-container-baby cubre-baby-swiper'>
      <div className='swiper-wrapper'>
        { slides.map((slide) => {
          const { id, texto, src, alt } = slide;
          return (
            <div key={`babySwiper-${id}`} className='flex flex-col items-center px-10 pt-6 pb-2 space-y-2 montserrat-m swiper-slide '>
              <img className='object-contain w-16 h-12' src={require(`../assets/static/${src}`).default} alt={alt} />
              <p className='text-sm'>{texto}</p>
            </div>
          );
        }) }
      </div>
      <button
        type='button'
        aria-label='Prev'
        onClick={() => {
          const mySwiper = document.querySelector('.swiper-container-baby').swiper;
          mySwiper.slideNext();
        }}
        className='swiper-button-next-baby'
      />
      <button
        type='button'
        aria-label='Next'
        onClick={() => {
          const mySwiper = document.querySelector('.swiper-container-baby').swiper;
          mySwiper.slidePrev();
        }}
        className='swiper-button-prev-baby'
      />
    </div>
  );
};

export default CubreBabySwiper;
