import React from 'react'
import { IntroPicture } from '../../Components/IntroPicture'
import { Pros } from '../EngineeringPage/Pros'
import { Services } from '../EngineeringPage/Services'
import { OurClients } from '../EngineeringPage/OurClients'
import { LetsConect } from '../EngineeringPage/LetsConect'

function ConstructionPage() {
    const image = 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const title = 'Solve Construcción'
    const titleDesc = 'Servicio de diseño y construcción de casas tipo'
  return (
    <>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
        <div className='ConstructionPage'>
        <Pros/>
        <Services/>
        <OurClients/>
        <LetsConect/>
        </div>
    </>
  )
}

export { ConstructionPage }