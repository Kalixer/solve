import React from 'react'
import { IntroPicture } from '../../Components/IntroPicture'
import { Pros } from '../EngineeringPage/Pros'
import { About } from '../ConstructionPage/About'
import { LetsConect } from '../EngineeringPage/LetsConect'
import { HouseType } from './HouseType'
import { YourHouseDesign } from './YourHouseDesign'
import { Expand } from './Expand'

function ArchitecturePage() {
  const image = 'https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  const title = ('Solve Construcción: Arquitectura')
  const titleDesc = 'Servicios de diseño de viviendas adaptados a tus necesidades'
  return (
    <div className='ArchitecturePage'>
      <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
      {/* Aquí (en 'Pros') irán los servicios resumidos */}
      <Pros/>
      <About/>
      <HouseType/>
      <YourHouseDesign/>
      <Expand/>

      <LetsConect/>

      {/* 
        Servicios => Componentes
        1. Casas Tipo
        2. Arquitectura [kinda check]
        3. Diseña tu casa
        4. Ampliaciones (Diseños modulares ampliables)
      */}
    </div>
  )
}

export { ArchitecturePage }