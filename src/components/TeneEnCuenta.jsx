import React from 'react';
import Poliza from './Poliza';
import NoCubreImg from './NoCubreImg';
import { resize, animateCSS, changeDevice } from '../funciones';
import json from '../jsons/json/teneEnCuenta.json';
import '../assets/styles/components/NoCubre.scss';

class TeneEnCuenta extends React.Component {
  constructor(props) {
    super(props);
    const { cantImg } = json;

    this.state = {
      poliza: <Poliza posicion={cantImg === 1 ? 0 : 1} />,
      images: [
        {
          tag: <NoCubreImg posicion={0} estado={cantImg === 1 ? 1 : 0} />,
        },
        {
          tag: <NoCubreImg posicion={1} estado={cantImg === 1 ? 0 : 1} />,
        },
        {
          tag: <NoCubreImg posicion={2} estado={0} />,
        },
        {
          tag: <NoCubreImg posicion={3} estado={0} />,
        },
      ],
    };
  }

  componentDidMount() {
    if (changeDevice() === 'mobile') {
      setTimeout(() => {
        resize('.info__modal', '.main__info', -10);
      }, 500);
    }
  }

  poliza(posicion) {
    const device = changeDevice();
    const estado = [];
    for (let i = 0; i < 4; i++) {
      if (posicion === i) {
        estado[i] = 1;
      } else {
        estado[i] = 0;
      }
    }
    animateCSS('.info__modal__text', 'fadeOut faster', () => {
      animateCSS('.info__modal__text', 'fadeIn faster');
      this.setState({
        poliza: <Poliza posicion={posicion} />,
        images: [
          {
            tag: <NoCubreImg posicion={0} estado={estado[0]} />,
          },
          {
            tag: <NoCubreImg posicion={1} estado={estado[1]} />,
          },
          {
            tag: <NoCubreImg posicion={2} estado={estado[2]} />,
          },
          {
            tag: <NoCubreImg posicion={3} estado={estado[3]} />,
          },
        ],
      }, () => {
        if (device === 'mobile') {
          resize('.info__modal', '.main__info', -10);
        }
      });
    });
  }

  render() {
    const { images, poliza } = this.state;
    const { title, cantImg, noLargeText } = json;
    const buttonImg = [];
    const length = cantImg || 4;
    for (let i = 0; i < length; i++) {
      buttonImg.push(i);
    }
    return (
      <section className='prevencion__header-desktop lg:h-45vh'>
        <section className='px-3 pt-4 pb-10 prevencion__main__header lg:pb-0 lg:ml-4 lg:leading-tight'>
          <h2 className='text-xl text-left main__header-titulo lg:text-2xl lg:text-left'>
            <span className='header-titulo-first montserrat-b lg:ml-24'>{title || 'Tené en cuenta'}</span>
            <br className='block' />
            lo que NO cubre tu póliza
          </h2>
          <div className='hidden h-1 lg:inline-flex'>
            <div className='w-48 h-full bg-black rounded-full black__border' />
            <div className='w-8 h-full ml-6 bg-black rounded-full' />
          </div>
        </section>
        <section className='lg:flex lg:justify-around lg:w-full'>
          <section className='relative main__info lg:w-2/3'>
            <div className='absolute flex justify-center w-full main__info__div lg:static lg:h-full'>
              <div className='w-5/6 p-4 text-center bg-white shadow-md info__modal lg:min-h-8 lg:grid lg:bg-transparent lg:shadow-none lg:h-full lg:grid-cols-2 lg:gap-4 lg:w-full lg:px-0 lg:pt-4 lg:pb-0'>
                <div className='flex mb-2 info__modal__header lg:flex lg:items-center lg:justify-center lg:ml-4'>
                  {buttonImg.map((o, index) => {
                    return (
                      <div key={o} className={`w-1/${length}`}>
                        <button type='button' className='mx-2 hover:scale-2 hover-all' onClick={() => { this.poliza(index); }}>{images[index].tag}</button>
                      </div>
                    );
                  })}
                </div>
                <div className='lg:h-full lg:flex lg:justify-center lg:w-full'>
                  <div className='info__modal__text lg:shadow-md lg:p-4 lg:bg-white lg:rounded-xl lg:h-full lg:mr-2'>
                    {poliza}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={`px-3 ${!noLargeText && 'py-2'} mb-4 text-center main__dato lg:w-1/3 lg:text-left lg:mr-20 lg:leading-relaxed`}>
            <p className='text-sm'>
              {!noLargeText && 'No te olvides de chequear que todas las sumas aseguradas reflejen el costo de la reconstrucción de tu casa o la reposición de tus bienes ante un incendio o robo. Si ves que el monto es insuficiente, comunicate con nosotros para que lo actualicemos.'}
            </p>
          </section>
        </section>
      </section>
    );
  }
};

export default TeneEnCuenta;
