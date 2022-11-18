import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { changeDevice } from '../funciones';

const Header = () => {
  const device = changeDevice();
  return (
    <header>
      {device === 'mobile' ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};

export default Header;
