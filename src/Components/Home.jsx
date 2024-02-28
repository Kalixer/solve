import React from 'react';
import '../styles/Home.scss';
import { HomeIntroPictures } from './HomeIntroPictures';
import { AboutUs } from './AboutUs';

function Home() {
  return (
    <div className='Home'>
        <HomeIntroPictures/>
        <AboutUs/>
    </div>
  )
}

export { Home }