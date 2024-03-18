import React from 'react';
import './index.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';
import { BarrData } from './BarrData';
import { FastTrustData } from './FastTrustData';
import { PresentationIng } from './PresentationIng';
import { PresentationConst } from './PresentationConst';
import { LetsConect } from '../EngineeringPage/LetsConect'

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <AboutUs/>
        <BarrData/>
        <PresentationIng/>
        <FastTrustData type={'engineering'}/>
        <PresentationConst/>
        <FastTrustData type={'construction'}/>
        <LetsConect/>
    </div>
  )
}

export { Home }