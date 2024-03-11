import React from 'react'
import './index.scss'
import { ProjectData } from './ProjectData'
import { Description } from './Description'

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function ProjectsPage() {
    const imagen = 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  return (
    <div className='ProjectsPage'>
        <figure className='imagePage'>
            <img src={imagen} alt="" />
        </figure>

        <button className='boton botonAnterior'><SlArrowLeft fill='white'/></button>
        <button className='boton botonSiguiente'><SlArrowRight fill='white' /></button>

        <Description/>
        <ProjectData/>
    </div>
  )
}

export { ProjectsPage }