import React from 'react';
import './index.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';
import { BarrData } from './BarrData';
import { CategoryBlocks } from './CategoryBlocks';
import { FastTrustData } from './FastTrustData';

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <FastTrustData/>
        <AboutUs/>
        <BarrData/>
        <CategoryBlocks/>
    </div>
  )
}

export { Home }