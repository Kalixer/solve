import React from 'react';
import '../styles/Home.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';
import { BarrData } from './BarrData';
import { CategoryBlocks } from './CategoryBlocks';

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <AboutUs/>
        <BarrData/>
        <CategoryBlocks/>
    </div>
  )
}

export { Home }