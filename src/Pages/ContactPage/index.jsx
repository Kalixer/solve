import React from 'react'
import './index.scss'

const image = 'https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'

const placeholderMessage = 'Me gustaría saber más sobre...'


function ContactPage() {
  const [nameForm, setNameForm] = React.useState('')
  const [areaForm, setAreaForm] = React.useState('')
  const [mailForm, setMailForm] = React.useState('')
  const [phoneForm, setPhoneForm] = React.useState('')
  const [messageForm, setMessageForm] = React.useState('')
  
  const updateNameForm = (event) => {
    setNameForm(event.target.value)
  }
  const updateAreaForm = (event) => {
    setAreaForm(event.target.value)
  }
  const updateMailForm = (event) => {
    setMailForm(event.target.value)
  }
  const updatePhoneForm = (event) => {
    setPhoneForm(event.target.value)
  }
  const updateMessageForm = (event) => {
    setMessageForm(event.target.value)
  }

  let formReady = false

  const evaluator = (par1, par2, par3, par4, par5) => {
    // Esto es para ver si todos los parámetros están llenos
    const elementos = [par1, par2, par3, par4, par5]

    const resultados = []

    elementos.forEach(elemento => {
      if(elemento.length > 2) {
        resultados.push(true)
      } else {
        resultados.push(false)
      }
    })

    if(resultados.includes(false)) {
      return false
    } else {
      return true
    }
  }

  React.useEffect(() => {
    formReady = evaluator(nameForm, areaForm, mailForm, phoneForm, messageForm)
  }, [nameForm, areaForm, mailForm, phoneForm, messageForm])

  const handleSubmit = (event) => {
    const form = {
      subject: `Solicitud de información sobre los servicios de Solve:${areaForm}`,
      name: nameForm,
      area: areaForm,
      mail: mailForm,
      phone: phoneForm,
      message: messageForm + ' ' + mailForm + ' ' + phoneForm,
    }
    event.preventDefault()
    console.log(formReady)
    console.log(nameForm, areaForm, mailForm, phoneForm, messageForm)

    const $buttonMailto = document.querySelector('#trucazo')
    $buttonMailto.setAttribute('href', 
    `mailto:al.caceres.ag72@gmail.com?subject=${form.subject} &body=${form.message}`)
    $buttonMailto.click()
  }

  return (
    <div className='ContactPage'>

      <section className='imageContainer'>
        <figure>
          <img src={image} alt="" />
        </figure>
      </section>
      <div className='divider'></div>

      <section className='contactBox'>
        <h1>Hablemos</h1>

        <form onSubmit={handleSubmit}>

          <div className='inputHorizontal'>
            <div className='inputContainer'>
              <p>Nombre y Apellido</p>
              <input placeholder='John Smith' type="text" onChange={updateNameForm}></input>
            </div>
            <div className='inputContainer'>
              <p>Area de Solve</p>
              <input placeholder='Ingeniería / Construcción' type="text"  onChange={updateAreaForm}></input>
            </div>
          </div>

          <div className='inputHorizontal'>
            <div className='inputContainer'>
              <p>Correo</p>
              <input placeholder='example@example.com' type="text"  onChange={updateMailForm}></input>
            </div>
            <div className='inputContainer'>
              <p>Teléfono</p>
              <input placeholder='+569 XXXX XXX' type="text" onChange={updatePhoneForm}></input>
            </div>
          </div>


          <div className='inputContainer inputMessage'>
            <p>Mensaje</p>
            <textarea type="text" placeholder={placeholderMessage}  onChange={updateMessageForm}></textarea>
          </div>
          <a href="mailto:al.caceres.ag72@gmail.com" id="trucazo"> </a>

          <button type='submit'>Enviar</button>


        </form>
      </section>

    </div>
  )
}

export { ContactPage }