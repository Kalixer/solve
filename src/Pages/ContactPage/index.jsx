import React from 'react'
import './index.scss'

function ContactPage() {
  const image = 'https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  
  const placeholderMessage = 'Me gustaría saber más sobre...'

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

        <form action="">

          <div className='inputHorizontal'>
            <div className='inputContainer'>
              <p>Nombre y Apellido</p>
              <input placeholder='John Smith' type="text"></input>
            </div>
            <div className='inputContainer'>
              <p>Area de Solve</p>
              <input placeholder='Ingeniería / Construcción' type="text"></input>
            </div>
          </div>

          <div className='inputHorizontal'>
            <div className='inputContainer'>
              <p>Correo</p>
              <input placeholder='example@example.com' type="text"></input>
            </div>
            <div className='inputContainer'>
              <p>Teléfono</p>
              <input placeholder='+569 XXXX XXX' type="text"></input>
            </div>
          </div>


          <div className='inputContainer inputMessage'>
            <p>Mensaje</p>
            <textarea type="text" placeholder={placeholderMessage}></textarea>
          </div>

          <button type='button'>Enviar</button>


        </form>
      </section>

    </div>
  )
}

export { ContactPage }