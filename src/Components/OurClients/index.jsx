import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop'
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

            <div className='proyectPanel'>
              <Link to='/projects' onClick={scrollToTop}>
                <button>Ver todos los proyectos</button>
              </Link>
              <div className='navButton'>  
                <LuChevronLeft />
                <LuChevronRight />
              </div>
            </div>
    
          </section>
          <CardMk2/>
        </div>
      )
}

export { OurClients }