import React from 'react'
import './Pros.scss'

import { LuCrosshair } from "react-icons/lu";
import { LuHourglass } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";

import { LuKeyRound } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";

import { LuCog } from "react-icons/lu";
import { LuExpand } from "react-icons/lu";

function Pros({typePage}) {

  const ventajas = [
    {
      type: 'Engineering',
      title: 'Experiencia en montaje',
      description: (<p>Más de 15 años de experiencia en materialidad y montaje en Metalcon y Tubest</p>),
      logo: <LuCrosshair />,
    },
    {
      type: 'Engineering',
      title: 'Plazo de entrega',
      description: (<p>Nos adaptamos a las necesiades de plazos de los clientes</p>),
      logo: <LuHourglass />,
    },
    {
      type: 'Engineering',
      title: 'Proyecto Ingeniería',
      description: (<p>Junto conplanos de montaje se entrega cubicación referencial de perfiles Metalcon y Tubest</p>),
      logo: <LuPencilRuler />,
    },
    {
      type: 'Construction',
      title: 'Llave en mano',
      description: (<p>Gracias a nuestra metodología podemos hacemos entrega de construcción a partir de los 4 meses</p>),
      logo: <LuKeyRound />,
    },
    {
      type: 'Construction',
      title: 'Arquitectura modular',
      description: (<p>Ofrecemos modelos de casas tipo de 1 y 2 pisos que permiten ampliaciones y personalización</p>),
      logo: <LuHome />,
    },
    {
      type: 'Construction',
      title: 'Supervisión por Ingeniero Civil',
      description: (<p>Seguridad, calidad y eficiencia garantizadas</p>),
      logo: <FaHelmetSafety />,
    },
    {
      type: 'Architecture',
      title: 'Casas Tipo',
      description: (<p>Ponemos a disposición modelos de casas de 1 y 2 pisos para llegar y construír</p>),
      logo: <LuHome />,
    },
    {
      type: 'Architecture',
      title: 'Personalización',
      description: (<p>Si deseas dejar tu sello en tu hogar, puedes colaborar con nosotros para un diseño personalizado</p>),
      logo: <LuCog />, 
    },
    {
      type: 'Architecture',
      title: 'Arquitectura Modular',
      description: (<p>¿Planes a futuro? Con nuestra metodología hacer una ampliación no será un problema</p>),
      logo: <LuExpand />,
    },
  ]

  const currentArr = ventajas.filter(element => element.type === typePage)


  return (
    <div className='Pros'>

      <div className='title'>
        <h1>Ventajas</h1>
      </div>

      
      <div className='advantageBox'>

        {currentArr.map(ventaja => {
          return(
            <div className='box' key={ventaja.title}>
              {ventaja.logo}
              <h3>{ventaja.title}</h3>
              {ventaja.description}
            </div>
          )
        })}

        {/* <div className='box'>
          <AiOutlineExperiment />
          <h3>Ventaja X</h3>
          <p>{adv_desc}</p>
        </div>
        
        <div className='box'>
          <AiOutlineExperiment />
          <h3>Ventaja X</h3>
          <p>{adv_desc}</p>
        </div>
        
        <div className='box'>
          <AiOutlineExperiment />
          <h3>Forma de Pago</h3>
          <p>Alternativa Pago Sistema TransBank</p>
        </div> */}

      </div>

    </div>
  )
}

export { Pros }