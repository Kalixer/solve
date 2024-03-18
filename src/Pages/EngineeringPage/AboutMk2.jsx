import React from 'react'
import './AboutMk2.scss'

import { RxDividerHorizontal } from "react-icons/rx";


function AboutMk2() {
    // const texto = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rerum doloribus ratione, eveniet impedit eaque vitae quos, eum nulla libero quaerat necessitatibus, ut quisquam pariatur minima illo qui vel voluptatum.`

    const description = (
        <>
            <p>
                Somos una empresa que, desde 2008, provee servicios de ingeniería y construcción.
            </p>
            <p>
                Nuestro principal objetivo es re<strong>solve</strong>r las necesidades de sus clientes.
            </p>
            <p>
                Desarrollamos proyectos de Ingeniería Estructural en destintas materialidades, siendo especialistas en el diseño de Acero sistemas y metodologías de construcción como <strong>Metalcon y Tubest</strong>. 
            </p>
            <p>
                Dentro de nuestros servicios se encuentra
            </p>
            <p>
                <strong>
                    Desarrollo de proyectos de Cálculo Estructural. <br />
                    Inspección técnica en obra: Para proyectos Metalcon y Tubest
                </strong>
            </p>
        
        </>
    )

    // const image = 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const image = 'https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  return (
    <div className='About'>
        <div className='container'>

            <figure className='imagenCont'>
                <img src={image} alt="" />
            </figure>

            
            <div className='relativeContainer'>
                <div className='polygon'></div>
                <section className='text'>
                    <div className='textContent'>
                        <h3><RxDividerHorizontal/> Sobre nostoros</h3>
                        <h1>Solve: Ingeniería y Cálculo</h1>
                        {description}
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
                            <p>Edificios caídos</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    </div>
  )
}

export { AboutMk2 }