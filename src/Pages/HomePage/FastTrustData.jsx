import React from 'react'
import './FastTrustData.scss'

import { LuCog } from "react-icons/lu";
import { LuHammer } from "react-icons/lu";
import { LuWarehouse } from "react-icons/lu";

import { LuBuilding2 } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";


function FastTrustData({type}) {
  
  const features = [
    {
      type: 'engineering',
      title: 'Ingeniería',
      logo: <LuCog />,
      description: (
        <p>
          Somos especialistas en el desarrollo de proyectos de cálculo esturctural en acero y sus sistemas constructivos: Metalcon y Tubest
          
        </p>
      ),
    },
    {
      type: 'engineering',
      title: 'Construcción',
      logo: <LuHammer />,
      description: (<p>Desarrollamos proyectos de construcción a suma alzada, que contemplan suministro y montaje de estructura Metalcon o Tubest</p>),
    },
    {
      type: 'engineering',
      title: 'Industrial',
      logo: <LuWarehouse />,
      description: (<p>Ponemos a sus disposición el desarrollo de procesos industrializados que optimizan la construcción en obra</p>),
    },
    {
      type: 'construction',
      title: 'Cálculo estructural',
      logo: <LuPencilRuler />,
      description: (<p>Desarrollo de proyectos de Cálculo Estructural. <br />
      Inspección técnica en obra: Para proyectos Metalcon y Tubest</p>),
    },
    {
      type: 'construction',
      title: 'Arquitectura',
      logo: <LuBuilding2 />,
      description: (<p>Desarrollo de proyecto de vivienda único y personalizado. Respaldado por un ingeniero calculista</p>),
    },
    {
      type: 'construction',
      title: 'Casas tipo',
      logo: <LuHome />,
      description: (<p>Ponemos a disposición modelos de casas de 1 y 2 pisos <br/> Elaboración de presupuesto para construcción inmediata</p>),
    },
    {
      type: 'construction',
      title: 'Llave en mano',
      logo: <LuKeyRound />,
      description: (<p>Modalidad de entrega construcción llave en mano<br/> Para una atención y seguimiento personalizado</p>),
    },
  ]

  const currentArr = features.filter((item) => item.type === type)

  // const calcDesc = (<p>Desarrollo de proyectos de Cálculo Estructural. <br />
  // Inspección técnica en obra: Para proyectos Metalcon y Tubest</p>)
  // const archDesc = (<p>Desarrollo de proyecto de vivienda único y personalizado. Respaldado por un ingeniero calculista</p>)
  // const typeDesc = (<p>Ponemos a disposición modelos de casas de 1 y 2 pisos <br/> Elaboración de presupuesto para construcción inmediata</p>)
  // const keyDesc = (<p>Modalidad de entrega construcción llave en mano<br/> Para una atención y seguimiento personalizado</p>)

  return (
    <div className='FastTrustData'>
      <li className='fast-container'>
        {
          currentArr.map(feature => {
            return(
              <ul className='fast-block'>
                {feature.logo}
                <h3>{feature.title}</h3>
                {feature.description}
              </ul>
            )
          })
        }

        {/* <ul className='fast-block'>
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
        </ul> */}

      </li>
    </div>
  )
}

export { FastTrustData }