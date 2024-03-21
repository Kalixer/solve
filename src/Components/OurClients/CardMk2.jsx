import React from 'react'
import './CardMk2.scss'

function CardMk2({client, currentImage}) {
    const image = 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const name = 'Johannes Shmithsen'
    const comment ='Realmente es un sueño cumplido, dentro del plazo y excelente la comunicación. Realmente una obra maestra'
    let cType

    // console.log(currentImage)

    if(client.type === 'company') {
      
      cType = null
    } else {
      cType = (<p>{client.houseType}</p>)
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

        
        <div className='cardOpinion'>
            <div className='userOpinion'>
              <p className='name'></p>
              <p className='comment'>"{comment}"</p>
            </div>
            <div className='userData'>
                <p className='date'>{client.date}</p>
                {cType}
            </div>
        </div>
    </div>
  )
}

export { CardMk2 }