import React from 'react'
import './Expand.scss'
import { MockUpDef } from './MockUp'

function Expand() {
  const image = 'https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const introduction = 'En Solve también pensamos a largo plazo'
  const title = 'Casas Tipo'
  const text = (
    <>
      <p> Nos gusta la idea de hacer el diseño modular, de forma que si un día deseas ampliar la casa porque ¿por qué no? </p>
      <p> Podamos hacer el trabajo de la forma más rápida y eficiente posible</p>
      <p> Confía en nosotros los proyectos no tienen por qué ser estáticos, tu hogar puede evolucionar contigo </p>
    </>
  )
  const moreData = (
    <>
      <p> Si tu vida crece, ¿por qué no tu hogar? </p>
    </>
  )

  return (
    <div className='Expand'>

      <MockUpDef image={image} introduction={introduction} title={title} text={text} moreData= {moreData}/>

    </div>
  )
}

export { Expand }