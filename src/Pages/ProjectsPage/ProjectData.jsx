import React from 'react'
import './ProjectData.scss'

function ProjectData({areaSolve, client, clientLogo='null', houseType, info}) {
  return (
    <div className='ProjectData'>

        <div className='infoBlock'>
            <h3>Area de Solve</h3>
            <p>{areaSolve}</p>
        </div>

        <div className='infoBlock'>
            <h3>Cliente</h3>
            <p>{client}</p>
        </div>

        <div className='infoBlock'>
            <h3>Tipo de casa</h3>
            <p>{houseType}</p>
        </div>

        <div className='infoBlock'>
            <h3>Información</h3>
            <p>{info}</p>
        </div>

    </div>
  )
}

export { ProjectData }