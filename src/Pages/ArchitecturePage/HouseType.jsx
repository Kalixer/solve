import React from 'react'
import { MockUpDef } from './MockUp'
import './HouseType.scss'

function HouseType() {
  const image = 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='HouseType'>

      <MockUpDef/>

    </div>
  )
}

export { HouseType }