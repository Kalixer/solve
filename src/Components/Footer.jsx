import React from 'react'
import '../styles/Footer.scss'
import logoSolve from '../assets/logoSolve.png'
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
  const copyright = `© 2024 Solve Ltda. Todos los derechos reservados`
  return (
    <div className='Footer'>

      <section className='info'>

        <div className='infoBlockContainer'>
          
          <div className='infoBlock'>
            <img src={logoSolve} alt="" />
            <div className='socialMedia'>
              <SiWhatsapp/>
              <SiFacebook />
              <SiInstagram />
            </div>
          </div>

          <div className='infoBlock infoContact'>
            <h3>Contact</h3>
            <div className='info_P'>
              <p>solve@solve.cl</p>
              <p>#221b Baker Street, London</p>
              <p>+569 7977 1139</p>
            </div>
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