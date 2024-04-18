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
    const { 
      typeProject, 
      e_projectIndex,
      setE_ProjectIndex,
      c_projectIndex,
      setC_ProjectIndex,
    } = React.useContext(MyContext)

    // esto es para filtar los proyectos por area
    const displayProjects = projects.filter(item => item.area === typeProject)

    const project = displayProjects[typeProject === 'Construction' ? c_projectIndex : e_projectIndex]
    
    const imagen = project.backgroundImg
    
    const review = project.reviewEs
    
    const IndexModDown = () => {
      console.log("ModDown")
      switch (typeProject) {
        case 'Engineering':
          if(e_projectIndex === 0) {
            setE_ProjectIndex(displayProjects.length - 1)
          } else {
            setE_ProjectIndex(e_projectIndex - 1)
          }
          break;
          case 'Construction':
            if(c_projectIndex === 0) {
              setC_ProjectIndex(displayProjects.length - 1)
            } else {
              setC_ProjectIndex(c_projectIndex - 1)
            }
            break;
          }
    }
    const IndexModUp = () => {
      console.log("ModUp")
      switch (typeProject) {
        case 'Engineering':
          if(e_projectIndex === displayProjects.length - 1) {
            setE_ProjectIndex(0)
          } else {
            setE_ProjectIndex(e_projectIndex + 1)
          }
        break;
        case 'Construction':
          if(c_projectIndex === displayProjects.length - 1) {
            setC_ProjectIndex(0)
          } else {
            setC_ProjectIndex(c_projectIndex + 1)
          }
        break;
      }
      
    }

    console.log('index C: ', c_projectIndex)
    console.log('index E: ', e_projectIndex)
    
  return (
    <div className='ProjectsPage'>
        <figure className='imagePage'>
            <img src={imagen} alt="" />
        </figure>

        <button className='boton botonAnterior' onClick={IndexModDown}><SlArrowLeft fill='white'/></button>
        <button className='boton botonSiguiente' onClick={IndexModUp}><SlArrowRight fill='white' /></button>

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