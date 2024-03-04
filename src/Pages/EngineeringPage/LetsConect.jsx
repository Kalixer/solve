import React from 'react'
import './LetsConect.scss'
import { RxDividerHorizontal } from "react-icons/rx";


function LetsConect() {
  const message = (<p>En nuestro enfoque, entender a fondo las necesidades de nuestros clientes es fundamental. Creemos que cada situación es única y merece una atención personalizada. Por eso, te invitamos a ponerte en contacto con nosotros. Queremos conocer tus desafíos y metas para ofrecerte la mejor asesoría posible. ¡Esperamos poder trabajar contigo pronto!</p>)

  return (
    <div className='LetsConect'>

      <div className='container'>

        <section className='text'>
          <h3><RxDividerHorizontal />Contacto</h3>
          <h1>¿Deseas saber más?</h1>
          {message}
          
        </section>


        <section className='form'>
          <h1>¡Hablemos!</h1>
          <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Número telefónico"/>
            <button type='button'>Enviar</button>
          </form>
        </section>

      </div>

    </div>
  )
}

export {LetsConect}