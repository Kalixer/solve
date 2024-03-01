import React from 'react'
import './index.scss'
import { IntroPicture } from '../../Components/IntroPicture'

function EngineeringPage() {
  const image = 'https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const title = 'Solve Ingeniería y Cálculo'
  const titleDesc = 'Servicios de cálculo estructural e ingeniería civil'
  return (
    <>
      <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
      <div className='EngineeringPage'>


      </div>
    </>
  )
}

export { EngineeringPage }