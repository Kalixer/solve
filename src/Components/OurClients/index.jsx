import React from 'react'
import './index.scss'
// import { Card } from './Card'
import { CardMk2 } from './CardMk2'

import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

function OurClients() {

    return (
        <div className='OurClientsConstruction'>
    
          <section className='clientContainer'>

            <div className='userComment'>
              <h1>Clientes que han confiado en nosotros</h1>
              <h3>Nombre del cliente y/o logo, empresa caso ingeniería</h3>
            </div> 

            <div className='navButton'>  
              <div><LuChevronLeft /></div>
              <div><LuChevronRight /></div>
            </div>
    
          </section>
          <CardMk2/>
        </div>
      )
}

export { OurClients }