import React from 'react';
import './index.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';
import { BarrData } from './BarrData';
import { CategoryBlocks } from './CategoryBlocks';
import { FastTrustData } from './FastTrustData';
import { PresentationIng } from './PresentationIng';
import { PresentationConst } from './PresentationConst';

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <FastTrustData/>
        <AboutUs/>
        <BarrData/>
        <PresentationIng/>
        <CategoryBlocks/>
        <PresentationConst/>
    </div>
  )
}

export { Home }