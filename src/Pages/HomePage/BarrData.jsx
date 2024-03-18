import React from 'react'
import './BarrData.scss'

// import fieldHouse from '../../assets/field_house.jpeg'

function BarrData() {
    const fieldHouse = 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=2048&h=1152&dpr=1'
    const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem aperiam esse obcaecati eligendi nostrum quasi, corrupti accusamus enim illo atque in repellendus amet, tenetur ipsum itaque, reprehenderit corporis ipsa.`
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
                <h2>Title Description</h2>
                {/* <p>{data}</p> */}
                {description}
            </div>
            <div className='Data-button'>
                <button type='button'>More</button>
            </div>
        </div>
    </div>
  )
}

export { BarrData }