import React from 'react'
import { MockUpDef } from './MockUp'
import './HouseType.scss'

import { FaTools } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

function HouseType() {
  const image = 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const introduction = 'Diseños predefinidos'
  const title = 'Casas Tipo'
  const text = (
    <>
      <p> Ponemos a disposción distintos tipos de casas prediseñadas, casas tipo, en 1 y 2 pisos </p>
      <p> De esta forma no tendrás que hacer la planeación y el diseño que tan complicado puede ser </p>
      <p> Desarrollo de proyectos de construcción en el área habitacional en nuestras especialidades </p>
      <p> Confía en nosotros y en nuestros exitosos diseños </p>
    </>
  )
  const moreData = (
    <>
      <p> <FaTools /> Elaboracion de presupiesto para construcción inmediata </p>
      <p> <FaHelmetSafety /> Supervisión de obras por Ingeniero Civil </p>
      <p> <FaKey /> Modalidad de construcción llave en mano </p>
    </>
  )

  return (
    <div className='HouseType'>

      <MockUpDef image={image} introduction={introduction} title={title} text={text} moreData= {moreData}/>

    </div>
  )
}

export { HouseType }