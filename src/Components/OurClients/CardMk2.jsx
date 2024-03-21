import React from 'react'
import './CardMk2.scss'

function CardMk2({client, currentImage}) {
    let cType
    let reviewCard

    // console.log(currentImage)

    if(client.type === 'company') {
      cType = null
      reviewCard = null
    } else if (client.type === 'house') {
      cType = (<p>{client.houseType}</p>)

      reviewCard = (
        <div className='cardOpinion'>
            <div className='userOpinion'>
              <p className='name'></p>
              <p className='comment'>"{client.comment}"</p>
            </div>
            <div className='userData'>
                <p className='date'>{client.date}</p>
                {cType}
            </div>
        </div>
      )
    }

    /* 
    Sección Ingeniería
    Añadir un título, características del proyecto

    Poner que las imagenes del proyecto vayan cambiando solas
    Que los botones solo cambien el proyecto
    */
  return (
    <div className='CardMk2'>
        <figure>
            <img src={currentImage} alt="" />
        </figure>

        
        {reviewCard}
    </div>
  )
}

export { CardMk2 }