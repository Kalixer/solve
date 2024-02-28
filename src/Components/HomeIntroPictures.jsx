import React from 'react'
import calcImage from '../assets/calculus2Vertical.jpg'
import houseImage from '../assets/houseImageVertical.jpg'

import '../styles/HomeIntroPictures.scss'

function HomeIntroPictures() {
    return (
    <>
        <div className='HomeIntroPictures'>
            <div className='pictureBox'>
                <h1>Ingeniería y Cálculo</h1>
                <figure>
                    <img src={calcImage} alt="" />
                </figure>
            </div>
            <div className='pictureBox'>
                <h1>Diseño y construcción de casas</h1>
                <figure>
                    <img src={houseImage} alt="" />
                </figure>
            </div>
        </div>
    </>
  )
}

export { HomeIntroPictures }