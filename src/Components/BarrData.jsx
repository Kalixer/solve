import React from 'react'
import '../styles/BarrData.scss'

import fieldHouse from '../assets/field_house.jpeg'

function BarrData() {
    const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem aperiam esse obcaecati eligendi nostrum quasi, corrupti accusamus enim illo atque in repellendus amet, tenetur ipsum itaque, reprehenderit corporis ipsa.`
  return (
    <div className='BarrData'>
        <figure>
            <img src={fieldHouse} alt="" />
        </figure>
        <div className='Data'>
            <div className='Data-texto'>
                <h2>Title Description</h2>
                <p>{data}</p>
            </div>
            <div className='Data-button'>
                <button type='button'>More</button>
            </div>
        </div>
    </div>
  )
}

export { BarrData }