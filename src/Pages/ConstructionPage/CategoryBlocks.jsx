import React from 'react';
import './CategoryBlocks.scss';

const image1 = 'https://images.pexels.com/photos/1874636/pexels-photo-1874636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const image2 = 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const image3 = 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const image4 = 'https://images.pexels.com/photos/2096147/pexels-photo-2096147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
function CategoryBlocks() {
  return (
    <div className='CategoryBlocks'>

        <div className='category'>
            <figure>
                <img src={image1} alt="" />
            </figure>
            <p>Casas Tipo</p>
        </div>

        <div className='category'>
            <figure>
                <img src={image2} alt="" />
            </figure>
            <p>Arquitectura</p>
        </div>

        <div className='category'>
            <figure>
                <img src={image3} alt="" />
            </figure>
            <p>Diseña tu casa</p>
        </div>

        <div className='category'>
            <figure>
                <img src={image4} alt="" />
            </figure>
            <p>Ampliaciones</p>
        </div>

    </div>
  )
}

export { CategoryBlocks }