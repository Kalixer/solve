import React from 'react';
import './CategoryBlocks.scss';

import { Link } from 'react-router-dom'
import { scrollToTop } from '../../utils/scrollToTop';

function CategoryBlocks() {

    const blocks = [
        {
            image: 'https://images.pexels.com/photos/1874636/pexels-photo-1874636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Casas Tipo',
        },
        {
            image: 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Arquitectura',
        },
        {
            image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Diseña tu casa',
        },
        {
            image: 'https://images.pexels.com/photos/2096147/pexels-photo-2096147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Ampliaciones',
        }
    ]

  return (
    <div className='CategoryBlocks'>

        { blocks.map(block => {
            return (
                <Link to='/architecture' onClick={scrollToTop}>
                    <div className='category' key={block.name}>
                        <figure className='img-wrapper'>
                            <img src={block.image} alt="" className='hover-zoom'/>
                        </figure>
                        <p>{block.name}</p>
                    </div>
                </Link>
            )
        })}

    </div>
  )
}

export { CategoryBlocks }