import React from 'react'
import {Link} from 'react-router-dom'

import { scrollToTop } from '../../utils/scrollToTop'
import './PresentationConst.scss'


function PresentationConst() {
  const image = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  const desc = (
    <>
    
      <p> 
        Con una amplia gama de opciones, ofrecemos modelos de casas tanto en uno como en dos pisos para adaptarse a sus necesidades.
      </p> 
      <p>
        Nuestros servicios incluyen la elaboración de presupuestos para construcción inmediata y la modalidad de entrega "Construcción Llave en Mano", asegurando comodidad y eficiencia.
      </p>
      <p>
        Especializados en proyectos habitacionales y de especialidades, nos comprometemos a ofrecer soluciones integrales para su proyecto, desde el diseño hasta la entrega final.
      </p> 
      <p>
        Confíe en nosotros para convertir su visión en realidad.
      </p>
      
    </>
  )
  
  return (
    <div className='PresentationConst'>

      <section className='constDescription'>
        <div className='textContainer'>
          <h1>Solve Construcción</h1>
          {desc}
          <Link to='/contact' onClick={scrollToTop}>
            <button type='button' className='hablemos'>Hablemos</button>
          </Link>
        </div>
      </section>

      <section className='imageContainer'>
        <figure>
          <img src={image} alt="" />
        </figure>
      </section>

      <div className='divider'></div>

    </div>
  )
}

export { PresentationConst }