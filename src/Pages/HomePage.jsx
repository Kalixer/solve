import React from 'react';
import '../styles/HomePage.scss';
import { HomeIntroPictures } from '../Components/HomeIntroPictures';
import { AboutUs } from '../Components/AboutUs';
import { BarrData } from '../Components/BarrData';
import { CategoryBlocks } from '../Components/CategoryBlocks';
import { FastTrustData } from '../Components/FastTrustData';

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