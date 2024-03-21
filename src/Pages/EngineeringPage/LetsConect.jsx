import React from 'react'
import './LetsConect.scss'
import { RxDividerHorizontal } from "react-icons/rx";


function LetsConect() {
  const [nameMail, setNameMail] = React.useState('')
  const [phoneN, setPhoneN] = React.useState('')

  const updateName = (event) => {
    setNameMail(event.target.value)
    console.log(phoneN, nameMail)
  }
  const updatePhoneN = (event) => {
    setPhoneN(event.target.value)
    console.log(phoneN, nameMail)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(phoneN.length <= 6 || nameMail.length <= 2) {
      alert('Uno de los parámetros no es válido. \nPor favor rellene el formulario')
    } else {
      const form = {
        name: nameMail,
        phone: phoneN,
        subject: 'Solicitud de información sobre sus servicios',
        message: `Hola Solve. Mi nombre es ${nameMail}, estaba viendo tu sitio web y deseo saber más sobre los servicios que ofrecen. Le dejo mi número para ponernos en contacto: ${phoneN}. Espero poder trabajar con ustedes pronto.`,
      }
  
      const $buttonMailto = document.querySelector('#trucazo')
      $buttonMailto.setAttribute('href', 
      `mailto:al.caceres.ag72@gmail.com?subject=${form.subject} &body=${form.message}`)
      $buttonMailto.click()
    }

  }



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
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={updateName}/>
            <input type="text" placeholder="Número telefónico" onChange={updatePhoneN}/>
            <a href="mailto:al.caceres.ag72@gmail.com" id="trucazo"> </a>
            <button type='submit'>Enviar</button>
          </form>
        </section>

      </div>

    </div>
  )
}

export {LetsConect}