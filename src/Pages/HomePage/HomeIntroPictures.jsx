import React from 'react'
import { Link } from 'react-router-dom'
// import calcImage from '../../assets/calculus2Vertical.jpg'
import houseImage from '../../assets/houseImageVertical.jpg'

import { scrollToTop } from '../../utils/scrollToTop';

import './HomeIntroPictures.scss'

function HomeIntroPictures() {
    const calcSrc = 'https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg?auto=compress&cs=tinysrgb&w=1920&h=2880&dpr=1' 

    const ingDesc = 'Nos especializamos en el cálculo estructural con años de experiencia'
    const constDesc = 'La construcción de casas está respaldada por la experiencia y asesoramiento de un ingeniero civil calculista'
    return (
    <>
        <div className='HomeIntroPictures'>

            <div className='pictureBox'>
                <figure>
                    <img src={calcSrc} alt="" />
                </figure>
                <div className='texto'>
                    <h1>Solve: Ingeniería y Cálculo</h1>
                    <p>{ingDesc}</p>
                    <Link className='b_link' to='/engineering' onClick={scrollToTop}>
                        <button>Quiero saber más</button>
                    </Link>
                </div>
            </div>

            <div className='pictureBox'>
                <figure>
                    <img src={houseImage} alt="" />
                </figure>
                <div className='texto'>
                    <h1>Solve Construcción</h1>
                    <p>{constDesc}</p>
                    <Link to='/construction' onClick={scrollToTop} className='b_link'>
                        <button>Quiero saber más</button>
                    </Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export { HomeIntroPictures }