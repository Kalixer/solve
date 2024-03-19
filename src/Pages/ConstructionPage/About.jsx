import React from 'react'
import './About.scss'

import { RxDividerHorizontal } from "react-icons/rx";


function About() {
    // const image = 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const image = 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'

    const description = (
        <>
            <p>
                <strong>SOLVE</strong> es una empresa que desde le año 2008 presta servicios de ingeniería y construcción en el área habitacional e industrial.
            </p>
            <p>
                Nuestra línea de negocios Casas Solve es especialista en la construcción de viviendas que utilizan el sistema constructivo Metalcon
            </p>
            <p>
                Dicho sistema incorpora soluciones de revestimiento y aislación térmica de comprobada eficiencia energética
            </p>
        </>
    )
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
                        <h1>SOLVE: Diseño y construcción</h1>
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