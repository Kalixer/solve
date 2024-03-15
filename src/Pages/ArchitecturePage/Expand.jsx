import React from 'react'
import './Expand.scss'
import { MockUpDef } from './MockUp'

import { FaHelmetSafety } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";

function Expand() {
  const image = 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const introduction = 'En Solve también pensamos a largo plazo'
  const title = 'Ampliaciones'
  const text = (
    <>
      <p> Nos gusta la idea de hacer el diseño modular, de forma que si un día deseas ampliar la casa, ¿por qué no? </p>
      <p> Con nuestra metodología podemos hacer el trabajo de la forma más rápida y eficiente posible </p>
      <p> Confía en nosotros, los proyectos no tienen por qué ser estáticos, tu hogar puede evolucionar contigo </p>
    </>
  )
  const moreData = (
    <>
      <p> <FaHelmetSafety /> Supervisión de obras por Ingeniero Civil </p>
      <p> <FaKey /> Modalidad de construcción llave en mano </p>
      <p> <FaExpandArrowsAlt /> Si tu vida crece, ¿por qué no tu hogar? </p>
    </>
  )

  return (
    <div className='Expand'>

      <MockUpDef image={image} introduction={introduction} title={title} text={text} moreData= {moreData}/>

    </div>
  )
}

export { Expand }