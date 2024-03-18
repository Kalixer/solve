import React from 'react'
import './Services.scss'
// import { AiOutlineAim } from "react-icons/ai";

import { LuLocateFixed } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";


import { LuMap } from "react-icons/lu";

// import { LuBarChart3 } from "react-icons/lu";
import { LuCalculator } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";

function Services() {
  const textDesc = 'Conoce las áreas en las que en solve somos especialistas'
  // const textoEjemplo = (<p>Podemos cocinar un arroz de un minuto en 58 segundos</p>)
  const imageEx = 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const services = [
    {
      title: 'Experiencia',
      icon: <LuLocateFixed />,
      text: 'Experiencia en Montaje y Construcción desarrollados en Sistemas MetalCon y Tubest',
    },
    {
      title: 'Plazos',
      icon: <LuTimer />,
      text: 'Plazo de entrega según requerimiento del cliente',
    },
    {
      title: 'Planos',
      icon: <LuMap />,
      text: 'Entregamos planos de montaje junto con cubicación referencial de perfiles Metalcon y Tubest',
    },
    {
      title: 'Asesorías',
      icon: <LuCalculator />,
      text: 'Damos asesorías para cambio de Materialidad a Metalcon o Tubest',
    },
    {
      title: 'Inspecciones',
      icon: <LuPencilRuler />,
      text: 'Hacemos inspecciones técnicas en terreno para elaboración de informes estructurales',
    },
  ]

  return (
    <div className='Services'>
      <div className='servicesContainer'>

        <section className='serviceBar'>
          <h2>{textDesc}</h2>
          <ul className='serviceBox'>
            {services.map(service => {
              return(
                <li>
                  <figure className='icon'>
                    {service.icon}
                  </figure>
                  {service.text}
                </li>
              )
            })}
            {/* <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li> */}
          </ul>
        </section>

      <figure className='imageContainer'>
        {/* 
          Esta imagen debe cambiar en funcion del
          box que tenga el hover 
        */}
        <img src={imageEx} alt="" />
      </figure>
      </div>
    </div>
  )
}

export { Services }