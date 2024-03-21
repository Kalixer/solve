import React from 'react'
import './CardMk2.scss'

function CardMk2({client, currentImage}) {
    const image = 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const name = 'Johannes Shmithsen'
    const comment ='Realmente es un sueño cumplido, dentro del plazo y excelente la comunicación. Realmente una obra maestra'
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