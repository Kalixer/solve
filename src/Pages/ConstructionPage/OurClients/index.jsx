import React from 'react'
import './index.scss'
import { Card } from './Card'

function OurClients() {
    const comment1 = 'La caseishon está en excelenteishon condiseishon'
    const comment2 = 'Ta buenarda la casa 👍🏻'
    const comment3 = 'La casa no se cayó cuando mi tío gordo se cayó 👍🏻'
    const comment4 = 'Caben mis 4 autos y 2 camionetas más mi helicóptero. Excelente servicio 👍🏻'

    return (
        <div className='OurClientsConstruction'>
          <section className='titleClients'>
            <h1>Nosotros recompensamos la confianza</h1>
          </section>
    
          <section className='clientContainer'>

            <div className='userComment'>
              <h1>Comentarios de quienes han confiado su sueño en nuestras manos</h1>
            </div>
    
            <div className='cardContainer'>
              <Card name='John Smith' comment={comment1} date='09/11/2000'/>
              <Card name='Lucho Vásquez' comment={comment2} date='14/02/2017'/>
              <Card name='Scarlet Johhansont' comment={comment3} date='35/24/2050'/>
              <Card name='Johannes Muller' comment={comment4} date='76/83/-15476'/>
            </div>
    
          </section>
        </div>
      )
}

export { OurClients }