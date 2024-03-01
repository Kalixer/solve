import React from 'react'
import './index.scss'
import { IntroPicture } from '../../Components/IntroPicture'

import { Pros } from './Pros'
import { Services } from './Services'
import { OurClients } from './OurClients'
import { LetsConect } from './LetsConect'


function EngineeringPage() {
  const image = 'https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const title = 'Solve Ingeniería y Cálculo'
  const titleDesc = 'Servicios de cálculo estructural e ingeniería civil'
  return (
    <>
      <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
      <div className='EngineeringPage'>
        <Pros/>
        <Services/>
        <OurClients/>
        <LetsConect/>
      </div>
    </>
  )
}

export { EngineeringPage }