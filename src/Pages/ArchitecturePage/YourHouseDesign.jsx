import React from 'react'
import './YourHouseDesign.scss'
import { MockUpReverse } from './MockUp'

function YourHouseDesign() {
  const image = 'https://images.pexels.com/photos/7641854/pexels-photo-7641854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  const introduction = '¿Quieres algo más personalizado, o quizá ya tienes un diseño?'
  const title = 'Diseño en conjunto y asesorías'
  const text = (
    <>
      <p> Nuestros servicios de construcción también incluyen la colaboración en el diseño para que nuestros clientes obtengan exactamente lo que desean </p>
      <p> Ofrecemos servicios de asesoría de planos </p>
      <p> Que tu casa transmita tu esencia también es nuestro objetivo </p>
    </>
  )
  const moreData = (
    <>
      <p> Con la asesoría de un ingeniero civil respladamos tu hogar </p>
    </>
  )

  return (
    <div className='YourHouseDesign'>
      <MockUpReverse image={image} introduction={introduction} title={title} text={text} moreData= {moreData}/>
    </div>
  )
}

export { YourHouseDesign }