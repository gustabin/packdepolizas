import React from 'react';
import arrowBottom from '../assets/static/arrow-bottom.png';
import { changeDevice } from '../funciones';
import json from '../jsons/json/anticipate.json';

class Anticipate extends React.Component {
  static collapse(id, device) {
    const arrows = document.querySelectorAll('.contenido');
    for (let i = 0; i < arrows.length; i++) {
      const element = document.querySelectorAll('.arrowAnticipate')[i];
      const content = document.querySelectorAll('.contenido')[id];
      if (id === i) {
        element.classList.toggle('active');
        element.classList.remove('spin');
        if (content.style.maxHeight) {
          if (device === 'mobile') {
            element.style.transform = 'rotate(90deg)';
          } else {
            element.style.transform = 'rotate(-90deg)';
          }
          element.classList.add('spinClose');
          element.addEventListener('animationend', () => {
            element.classList.remove('spinClose');
          });
          content.style.maxHeight = null;
        } else {
          element.classList.add('spin');
          element.style.transform = 'rotate(0deg)';
          element.onanimationend = () => {
            element.classList.remove('spin');
          };
          content.style.maxHeight = `${content.scrollHeight}px`;
        }

      } else {
        if (element.classList.contains('active')) {
          element.classList.toggle('active');
          element.classList.remove('spin');
          arrows[i].style.maxHeight = null;
          element.classList.add('spinClose');
          if (device === 'mobile') {
            element.style.transform = 'rotate(90deg)';
          } else {
            element.style.transform = 'rotate(-90deg)';
          }
          element.addEventListener('animationend', () => {
            element.classList.remove('spinClose');
          });
        }
      }
    }
  }

  render() {
    const device = changeDevice();
    const rows = json.map((row) => {
      const { id, titulo, lista } = row;
      return (
        <div className={id % 2 === 0 ? 'lg:mr-16 lg:ml-32 collapse-object lg:h-full' : 'lg:mr-32 lg:ml-16 collapse-object lg:h-full'} key={id}>
          <div
            role='button'
            tabIndex={id}
            className={id === 0 && device === 'mobile' ? 'mt-6 bg-white border-dotted border-b-2 montserrat-eb flex justify-between pb-1 items-center text-dark-gray cursor-pointer lg:flex lg:flex-row-reverse lg:py-1' : 'bg-white border-dotted border-b-2 montserrat-eb flex justify-between py-1 items-center text-dark-gray cursor-pointer lg:flex lg:flex-row-reverse'}
            onClick={() => {
              Anticipate.collapse(id, device);
            }}
          >
            <h4 className='lg:w-full lg:ml-4 collapse__object-titulo'>{titulo}</h4>
            <button type='button' className='collapsible' id={`botonAnticipate${id}`}>
              <img className='w-6 h-6 arrowAnticipate lg:h-auto lg:w-8' src={arrowBottom} alt='arrowDown' />
            </button>
          </div>
          <ul className='pb-1 pl-4 mt-3 list-disc list-outside montserrat-l text-gray contenido'>
            {lista.map((row, index) => {
              const { id } = row;
              const { texto } = row;
              return (
                <li key={id} className={(lista.length - 1) === id ? 'border-dotted border-b-2 mx-2' : index === 0 ? 'mx-2 mt-1' : 'mx-2'}>
                  {texto}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    return (
      <div className='anticipate__collapse'>
        {rows}
      </div>
    );
  }
}

export default Anticipate;
