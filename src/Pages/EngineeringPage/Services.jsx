import React from 'react'
import './Services.scss'
import { AiOutlineAim } from "react-icons/ai";

function Services() {
  const textDesc = 'Conoce las áreas en las que en solve somos especialistas'
  const textoEjemplo = (<p>Podemos cocinar un arroz de un minuto en 58 segundos</p>)
  const imageEx = 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (
    <div className='Services'>
      <div className='servicesContainer'>

        <section className='serviceBar'>
          <h2>{textDesc}</h2>
          <ul className='serviceBox'>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
            <li><AiOutlineAim />{textoEjemplo}</li>
          </ul>
        </section>

      <figure>
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