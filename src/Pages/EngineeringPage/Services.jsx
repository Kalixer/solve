import React from 'react'
import './Services.scss'
// import { AiOutlineAim } from "react-icons/ai";

import { LuLocateFixed } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";


import { LuMap } from "react-icons/lu";

// import { LuBarChart3 } from "react-icons/lu";
import { LuCalculator } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";


import { LuHome } from "react-icons/lu";



function Services({type}) {
  const textDesc = 'Conoce las áreas en las que en solve somos especialistas'
  // const textoEjemplo = (<p>Podemos cocinar un arroz de un minuto en 58 segundos</p>)
  const imageEx = 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const services = [
    {
      type: 'Engineering',
      title: 'Experiencia',
      icon: <LuLocateFixed />,
      text: 'Experiencia en Montaje y Construcción desarrollados en Sistemas MetalCon y Tubest',
    },
    {
      type: 'Engineering',
      title: 'Plazos',
      icon: <LuTimer />,
      text: 'Plazo de entrega según requerimiento del cliente',
    },
    {
      type: 'Engineering',
      title: 'Planos',
      icon: <LuMap />,
      text: 'Entregamos planos de montaje junto con cubicación referencial de perfiles Metalcon y Tubest',
    },
    {
      type: 'Engineering',
      title: 'Asesorías',
      icon: <LuCalculator />,
      text: 'Damos asesorías para cambio de Materialidad a Metalcon o Tubest',
    },
    {
      type: 'Construction',
      title: 'Sistema de Construcción',
      icon: <LuLocateFixed />,
      text: 'Con más de 15 años de experiencia, somos especialistas en sistema constructivo Metalcon y Tubest',
    },
    {
      type: 'Construction',
      title: 'Sistema de Construcción',
      icon: <LuCalculator />,
      text: 'Las obras son supervisadas por Ingeniero Civil',
    },
    {
      type: 'Construction',
      title: 'Velocidad',
      icon: <LuTimer />,
      text: 'Con nuestra metodología podemos hacer entrega de llave en mano a partir de los 4 meses',
    },
    {
      type: 'Construction',
      title: 'Diseño estándar',
      icon: <LuHome />,
      text: 'Ponemos a disposición modelos de casas tipo de 1 y 2 pisos',
    },
    {
      type: 'Construction',
      title: 'Personalizado',
      icon: <LuPencilRuler />,
      text: '¿Quieres que tu hogar tenga tu sello? También podemos diseñarla en conjunto',
    },
  ]

  const currentArr = services.filter(item => item.type === type)

  return (
    <div className='Services'>
      <div className='servicesContainer'>

        <section className='serviceBar'>
          <h2>{textDesc}</h2>
          <ul className='serviceBox'>
            {currentArr.map(service => {
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