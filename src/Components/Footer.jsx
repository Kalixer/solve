import React from 'react'
import '../styles/Footer.scss'
import luthorLogo from '../assets/luthorLogo.png'
import { VscTerminalLinux } from "react-icons/vsc";


function Footer() {
  const copyright = `© 2024 Solve Ltda. Todos los derechos reservados`
  return (
    <div className='Footer'>

      <section className='info'>

        <div className='infoBlock'>
          <img src={luthorLogo} alt="" />
          <div className='socialMedia'>
            <VscTerminalLinux/>
            <VscTerminalLinux/>
            <VscTerminalLinux/>
          </div>
        </div>

        <div className='infoBlock infoContact'>
          <h3>Contact</h3>
          <div className='info_P'>
            <p>email@email.com</p>
            <p>address</p>
            <p>+569 xxxx xxxx</p>
          </div>
        </div>

        <form className='infoBlock infoInput'>
          <h3>Email input</h3>
          <p>Enter your email and we'll get in touch</p>
          <div className='inputSubmit'>
            <input type="text" placeholder='email@email.com'/>
            <button type='button'>Submit</button>
          </div>
        </form>

      </section>

      <section className='copyright'>
        <p>{copyright}</p>
      </section>
    </div>
  )
}

export { Footer }