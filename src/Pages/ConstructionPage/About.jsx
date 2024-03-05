import React from 'react'
import './About.scss'

import { RxDividerHorizontal } from "react-icons/rx";


function About() {
    const texto = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rerum doloribus ratione, eveniet impedit eaque vitae quos, eum nulla libero quaerat necessitatibus, ut quisquam pariatur minima illo qui vel voluptatum.`
    // const image = 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const image = 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='AboutConstruction'>
        <div className='container'>

            <figure className='imagenCont'>
                <img src={image} alt="" />
            </figure>

            
            <div className='relativeContainer'>
                <section className='text'>
                    <div className='textContent'>
                        <h3><RxDividerHorizontal/> Sobre nostoros</h3>
                        <h1>Solve: Diseño y construcción</h1>
                        <p>{texto}</p>
                        <p>{texto}</p>
                        <p>{texto}</p>
                    </div>

                    <div className='infoBlocks'>
                        <div className='block'>
                            <h3>+15</h3>
                            <p>Años de experiencia</p>
                        </div>
                        <div className='block'>
                            <h3>+40</h3>
                            <p>Proyectos exitosos</p>
                        </div>
                        <div className='block'>
                            <h3>0</h3>
                            <p>Casas caídas</p>
                        </div>
                    </div>
                </section>
            <div className='polygon'></div>
            </div>

        </div>
    </div>
  )
}

export { About }