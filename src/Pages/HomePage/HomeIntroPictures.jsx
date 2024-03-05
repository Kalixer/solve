import React from 'react'
import calcImage from '../../assets/calculus2Vertical.jpg'
import houseImage from '../../assets/houseImageVertical.jpg'

import './HomeIntroPictures.scss'

function HomeIntroPictures() {
    const ingDesc = 'Nos especializamos en el cálculo estructural con años de experiencia'
    const constDesc = 'La construcción de casas está respaldada por la experiencia y asesoramiento de un ingeniero civil calculista'
    return (
    <>
        <div className='HomeIntroPictures'>

            <div className='pictureBox'>
                <figure>
                    <img src={calcImage} alt="" />
                </figure>
                <div className='texto'>
                    <h1>Solve: Ingeniería y Cálculo</h1>
                    <p>{ingDesc}</p>
                    <button>Quiero saber más</button>
                </div>
            </div>

            <div className='pictureBox'>
                <figure>
                    <img src={houseImage} alt="" />
                </figure>
                <div className='texto'>
                    <h1>Solve Construcción</h1>
                    <p>{constDesc}</p>
                    <button>Quiero saber más</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export { HomeIntroPictures }