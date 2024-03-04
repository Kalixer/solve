import React from 'react'
import './Pros.scss'
import { AiOutlineExperiment } from "react-icons/ai";

function Pros() {
  const adv_desc = 'Lideres en la era de la construcción de no se qué porque este texto es solo como ejemplo'

  return (
    <div className='Pros'>

      <div className='title'>
        <h1>Ventajas</h1>
      </div>

      
      <div className='advantageBox'>

        <div className='box'>
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
          <h3>Ventaja X</h3>
          <p>{adv_desc}</p>
        </div>

      </div>

    </div>
  )
}

export { Pros }