import React from 'react'
import './index.scss'
import { IntroPicture } from '../../Components/IntroPicture'

// import { About } from './About'
import { AboutMk2 } from './AboutMk2'
import { Pros } from './Pros'
import { Services } from './Services'
import { OurClientsLogos } from './OurClientsLogos'
import { OurClients } from '../../Components/OurClients'
import { LetsConect } from './LetsConect'


function EngineeringPage() {
  const image = 'https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  const title = 'Solve Ingeniería: Cálculo estructural'
  const titleDesc = 'Servicios de cálculo estructural e ingeniería civil'

  return (
    <>
      <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
      <div className='EngineeringPage'>
        <Pros typePage={'Engineering'}/>
        {/* <About/> */}
        <AboutMk2/>
        <OurClientsLogos/>
        <Services type={'Engineering'}/>
        <OurClients name='name' logo='logo' date='date/date' review='review' pictures='pictures'/>
        <LetsConect/>
      </div>
    </>
  )
}

export { EngineeringPage }