import React from 'react'
import '../styles/IntroPicture.scss'

function IntroPicture({image, title, titleDesc}) {
  return (
    <div className='IntroPicture'>
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className='texto'>
            <h1>{title}</h1>
            <p>{titleDesc}</p>
        </div>
    </div>
  )
}

export { IntroPicture }