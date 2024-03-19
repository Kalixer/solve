import React from 'react'
import { IntroPicture } from '../../Components/IntroPicture'
import { Pros } from '../EngineeringPage/Pros'
import { Services } from '../EngineeringPage/Services'
import { OurClients } from '../../Components/OurClients'
import { LetsConect } from '../EngineeringPage/LetsConect'
import { CategoryBlocks } from './CategoryBlocks'
import { About } from './About'

function ConstructionPage() {
    const image = 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
    const title = 'Solve Construcción'
    const titleDesc = 'Servicio de diseño y construcción de casas tipo'
  return (
    <>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
        <div className='ConstructionPage'>
        <Pros typePage={'Construction'}/>
        <About/>
        <Services type={'Construction'}/>
        <CategoryBlocks/>
        <OurClients/>
        <LetsConect/>
        </div>
    </>
  )
}

export { ConstructionPage }