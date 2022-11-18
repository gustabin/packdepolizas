import React from 'react';
import PrevenTips from './PrevenTips';
import ToPreventips from './ToPreventips';
import { has } from '../jsons/json/noCubre.json';

const PreventipsConjunto = () => {
  return (
    <>
      <section id='sectionPrenvetips' className='main__preventips mt-5 lg:flex lg:flex-row-reverse lg:relative lg:mt-12'>
        <PrevenTips />
        <ToPreventips />
      </section>
      {has === 'texto' && (
        <div className='montserrat-b m-4 lg:mb-4 lg:mx-4 lg:py-12'>
          <h2 className='py-1 border-t-2 border-dotted'>Sistemas de alarmas.</h2>
          <h2 className='py-1 border-t-2 border-dotted'>Cámaras de seguridad monitoreadas.</h2>
          <h2 className='py-1 border-b-2 border-t-2 border-dotted'>Personal de vigilancia.</h2>
        </div>
      )}
    </>
  );
};

export default PreventipsConjunto;
