import React from 'react'
import './CardMk2.scss'

function CardMk2() {
    const image = 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const name = 'Johannes Shmithsen'
    const comment ='La casa está pulentísima'
    const date = '35/22/2075'
    const cType = 'Casa Tipo 1'


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