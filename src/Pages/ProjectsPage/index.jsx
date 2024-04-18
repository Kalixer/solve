import React from 'react'
import './index.scss'
import { ProjectData } from './ProjectData'
import { Description } from './Description'

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

// this is the DataBase
import { projects } from '../../database/projects';

import { MyContext } from '../../hooks/MyContext';


function ProjectsPage() {
    const { typeProject } = React.useContext(MyContext)

    // esto es para filtar los proyectos por area
    const displayProjects = projects.filter(item => item.area === typeProject)

    const project = displayProjects[0]
    const imagen = project.backgroundImg
    
    const review = project.reviewEs
    
    
  return (
    <div className='ProjectsPage'>
        <figure className='imagePage'>
            <img src={imagen} alt="" />
        </figure>

        <button className='boton botonAnterior'><SlArrowLeft fill='white'/></button>
        <button className='boton botonSiguiente'><SlArrowRight fill='white' /></button>

        <div className='component-container'>
          <Description 
            areaSolve={project.areaSolve}
            review={review}
          />
          <ProjectData
            areaSolve={project.areaSolve}
            client={project.client}
            clientLogo={project.clientLogo}
            houseType={project.houseType}
            info={project.info}
          />
        </div>
        
    </div>
  )
}

export { ProjectsPage }