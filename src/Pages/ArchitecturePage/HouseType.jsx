import React from 'react'
import { MockUpDef } from './MockUp'
import './HouseType.scss'

function HouseType() {
  const image = 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const introduction = 'Diseños predefinidos'
  const title = 'Casas Tipo'
  const text = (
    <>
      <p> Ponemos a disposción distintos tipos de casas prediseñadas </p>
      <p> De esta forma no tendrás que hacer la planeación y el diseño que tan complicado puede ser </p>
      <p> Confía en nosotros y en nuestros exitosos diseños </p>
    </>
  )
  const moreData = (
    <>
      <p> Diseños Tipo 1 y 2 tienen tal y tal característica</p>
    </>
  )

  return (
    <div className='HouseType'>

      <MockUpDef image={image} introduction={introduction} title={title} text={text} moreData= {moreData}/>

    </div>
  )
}

export { HouseType }