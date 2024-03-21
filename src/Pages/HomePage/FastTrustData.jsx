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

  // Esto es para iterar sobre este array filtrado en función del tipo
  const currentArr = features.filter((item) => item.type === type)

  let area = ''
  
  if(type === 'engineering') {
    area = 'Ingeniería'
  }
  else if (type === 'construction') {
    area = 'Construcción'
  }

  return (
    <div className='FastTrustData'>

      <h1 className='title'>Solve {area}:</h1>

      <li className='fast-container'>
        {
          currentArr.map(feature => {
            return(
              <ul className='fast-block' key={feature.title}>
                {feature.logo}
                <h3>{feature.title}</h3>
                {feature.description}
              </ul>
            )
          })
        }
      </li>

    </div>
  )
}

export { FastTrustData }