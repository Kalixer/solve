import React from 'react'
import calcImage from '../../assets/calculus2Vertical.jpg'
import houseImage from '../../assets/houseImageVertical.jpg'

import './HomeIntroPictures.scss'

function HomeIntroPictures() {
    return (
    <>
        <div className='HomeIntroPictures'>
            <div className='pictureBox'>
                <figure>
                    <img src={calcImage} alt="" />
                </figure>
                <h1>Ingeniería y Cálculo</h1>
            </div>
            <div className='pictureBox'>
                <figure>
                    <img src={houseImage} alt="" />
                </figure>
                <h1>Diseño y Construcción</h1>
            </div>
        </div>
    </>
  )
}

export { HomeIntroPictures }