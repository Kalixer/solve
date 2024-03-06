import React from 'react'
import { Link } from 'react-router-dom'
import './PresentationIng.scss'
import { scrollToTop } from '../../utils/scrollToTop'

function PresentationIng() {
  const desc1 = `Con amplia experiencia en el ámbita de la ingeniería civil, ofrecemos servicios especializados en el desarrollo de proyectos de cálculo estructural, informes de daños estructurales e inspección técnica.`
  const desc2 = `Con más de 15 años de experiencia brindamos asesoría para el cambio de materialidad a sistemas constructivos como Metalcon y Tubest, junto con la elaboración de detalladas memorias de cálculo. Confíe en nosotros para garantizar la seguridad y eficiencia en sus proyectos.`

  const image = 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=0&dpr=1'


  return (
    <div className='PresentationIng'>

      <section className='sectionContainer imageContainer'>
        <figure>
          <img src={image} alt="" />
          <div className='boxBack'>
            <div className='boxFront'>
              <p>Más de 15 años de experienca</p>
            </div>
          </div>
        </figure>
      </section>
    
      <section className='sectionContainer constDescription'>
        <div className='texto'>
          <span>¿Cálculos y estructuras? Nosotros nos encargamos</span>
          <h1>Solve Ingeniería</h1>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
        <Link to='/contact' onClick={scrollToTop}>
          <button type='button' className='hablemos'>Hablemos</button>
        </Link>

      </section>
    
    </div>
  )
}

export { PresentationIng }