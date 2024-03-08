import React from 'react'
import './CardMk2.scss'

function CardMk2() {
    const image = 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const name = 'Johannes Shmithsen'
    const comment ='Realmente es un sueño cumplido, dentro del plazo y excelente la comunicación. Realmente una obra maestra'
    const date = '35/22/2075'
    const cType = 'Casa Tipo 1'


    /* 
    Sección Ingeniería
    Añadir un título, características del proyecto

    Poner que las imagenes del proyecto vayan cambiando solas
    Que los botones solo cambien el proyecto
    */
  return (
    <div className='CardMk2'>
        <figure>
            <img src={image} alt="" />
        </figure>

        <div className='cardOpinion'>
            <div className='userOpinion'>
              <p className='name'>{name}</p>
              <p className='comment'>"{comment}"</p>
            </div>
            <div className='userData'>
                <p className='date'>{date}</p>
                <p className='cType'>{cType}</p>
            </div>
        </div>
    </div>
  )
}

export { CardMk2 }