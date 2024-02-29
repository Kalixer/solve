import React from 'react'
import { IntroPicture } from '../Components/IntroPicture'

function ConstructionPage() {
    const image = 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const title = 'Solve Construcción'
    const titleDesc = 'Servicio de diseño y construcción de casas tipo'
  return (
    <div className='ConstructionPage'>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
    </div>
  )
}

export { ConstructionPage }