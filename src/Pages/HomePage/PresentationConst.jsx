import React from 'react'
import './PresentationConst.scss'


function PresentationConst() {
  const image = 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const desc = 'Con una amplia gama de opciones, ofrecemos modelos de casas tanto en uno como en dos pisos para adaptarse a sus necesidades. Nuestros servicios incluyen la elaboración de presupuestos para construcción inmediata y la modalidad de entrega "Construcción Llave en Mano", asegurando comodidad y eficiencia. Especializados en proyectos habitacionales y de especialidades, nos comprometemos a ofrecer soluciones integrales para su proyecto, desde el diseño hasta la entrega final. Confíe en nosotros para convertir su visión en realidad.'
  return (
    <div className='PresentationConst'>

      <section className='constDescription'>
        <div className='textContainer'>
          <h1>Solve Construcción</h1>
          <p>{desc}</p>
          <button type='button' className='hablemos'>Hablemos</button>
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