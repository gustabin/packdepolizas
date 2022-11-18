import React from 'react';
import { withRouter } from 'react-router-dom';
import Cubre from '../components/Cubre';
import { changeDevice, animateCSS } from '../funciones';
import json from '../jsons/json/pages.json';

class CubreParent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const device = changeDevice();
    document.querySelector('body').classList.add('h-auto');
    document.querySelector('.goPrevencion').addEventListener('click', () => {
      animateCSS('.cubre', 'slideOutUp faster', () => {
        json.forEach((element) => {
          return (element.cubreParent &&
            history.push(element.path)
          );
        });
      });
    }, false);
    if (device === 'mobile') {
      const header = document.querySelector('header');
      header.style.zIndex = '100';
      header.classList.add('top-0', 'fixed', 'w-full');
      document.querySelector('.swiper-container-v').style.marginTop = '54px';
    }
  }

  componentWillUnmount() {
    const header = document.querySelector('header');
    if (header != null) {
      header.style.zIndex = '0';
      header.classList.remove('top-0', 'fixed', 'w-full');
    }
    document.querySelector('.swiper-container-v').style.marginTop = '0px';
  }

  render() {
    return (
      <>
        <div className='fixed top-0 w-screen h-screen z-n-10' />
        <div className='swiper-container-v'>
          <div className='swiper-wrapper-v'>
            <div>
              <Cubre />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CubreParent);
