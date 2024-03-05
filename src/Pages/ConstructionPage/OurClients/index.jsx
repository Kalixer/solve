import React from 'react'
import './index.scss'
// import { Card } from './Card'
import { CardMk2 } from './CardMk2'

function OurClients() {
  
    const arrowR = '>'
    const arrowL = '<'

    return (
        <div className='OurClientsConstruction'>
    
          <section className='clientContainer'>

            <div className='userComment'>
              <h1>La confianza en nosotros es recompensada</h1>
              <h3>Comentarios de quienes han confiado su sueño en nuestras manos</h3>
            </div> 

            <div className='navButton'>  
              <div>{arrowL}</div>
              <div>{arrowR}</div>
            </div>
    
          </section>
          <CardMk2/>
        </div>
      )
}

export { OurClients }