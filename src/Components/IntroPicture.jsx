import React from 'react'
import '../styles/IntroPicture.scss'

function IntroPicture() {
    const image = 'https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='IntroPicture'>
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className='texto'>
            <h1>Solve Ingeniería</h1>
            <p>Servicios de cálculo estructural e ingeniería civil</p>
        </div>
    </div>
  )
}

export { IntroPicture }