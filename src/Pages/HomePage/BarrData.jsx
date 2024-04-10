import React from 'react'
import './BarrData.scss'


function BarrData() {
    const fieldHouse = 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=2048&h=1152&dpr=1'
    const description = (
        <>
            <p>
                Desarrollamos proyectos de Construcción en distintas materialidades, siendo especialistas en el diseño en Acero y sistemas constructivos: Metalcon y Tubest
            </p>
        </>
    )
    return (
    <div className='BarrData'>
        <figure>
            <img src={fieldHouse} alt="" />
        </figure>
        <div className='Data'>
            <div className='Data-texto'>
                <h2>Nuestra especialidad</h2>
                {description}
            </div>
            {/* <div className='Data-button'>
                <button type='button'>More</button>
            </div> */}
        </div>
    </div>
  )
}

export { BarrData }