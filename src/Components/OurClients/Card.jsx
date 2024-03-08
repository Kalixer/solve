import React from 'react'
import './Card.scss'

function Card({name, comment, date, cType}) {
    // const image = 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
          <div className='Card'>
              <p className='name'>{name}</p>
              <p className='comment'>"{comment}"</p>
              <div className='compData'>
                <p className='date'>{date}</p>
                <p className='cType'>{cType}</p>
              </div>
          </div>
    //   <div className='CardContainer'>
    //       {/* <figure>
    //           <img src={image} alt="" />
    //       </figure> */}

    //   </div>{ }
    )
}

export { Card }