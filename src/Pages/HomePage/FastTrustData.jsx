import React from 'react'
import './FastTrustData.scss'

import { LuBuilding2 } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";


function FastTrustData() {
  
  const calcDesc = (<p>Desarrollo de proyectos de Cálculo Estructural. <br />
  Inspección técnica en obra: Para proyectos Metalcon y Tubest</p>)
  const archDesc = (<p>Desarrollo de proyecto de vivienda único y personalizado. Respaldado por un ingeniero calculista</p>)
  const typeDesc = (<p>Ponemos a disposición modelos de casas de 1 y 2 pisos <br/> Elaboración de presupuesto para construcción inmediata</p>)
  const keyDesc = (<p>Modalidad de entrega construcción llave en mano<br/> Para una atención y seguimiento personalizado</p>)

  return (
    <div className='FastTrustData'>
      <li className='fast-container'>
        <ul className='fast-block'>
          <LuPencilRuler />
          <h3>Cálculo estructural</h3>
          {calcDesc}
        </ul>
        <ul className='fast-block'>
          <LuBuilding2 />
          <h3>Arquitectura</h3>
          {archDesc}
        </ul>
        <ul className='fast-block'>
          <LuHome />
          <h3>Casas Tipo</h3>
          {typeDesc}
        </ul>
        <ul className='fast-block'>
          <LuKeyRound />
          <h3>Llave en mano</h3>
          {keyDesc}
        </ul>
      </li>
    </div>
  )
}

export { FastTrustData }