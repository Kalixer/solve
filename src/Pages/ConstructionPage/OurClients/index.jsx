import React from 'react'
import './index.scss'
// import { Card } from './Card'
import { CardMk2 } from './CardMk2'

function OurClients() {
    const comment1 = 'La caseishon está en excelenteishon condiseishon'
    const comment2 = 'Ta buenarda la casa 👍🏻'
    const comment3 = 'La casa no se cayó cuando mi tío gordo se cayó 👍🏻'
    const comment4 = 'Caben mis 4 autos y 2 camionetas más mi helicóptero. Excelente servicio 👍🏻'
    const cType = 'Casa tipo 1'
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