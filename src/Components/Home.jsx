import React from 'react';
import '../styles/Home.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';
import { BarrData } from './BarrData';

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <AboutUs/>
        <BarrData/>
    </div>
  )
}

export { Home }