import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.scss'

import {ReactComponent as LogoSolve } from '../assets/solveLogo-min.svg'

import { SiWhatsapp } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

function Footer() {
  const [hover, setHover] = React.useState(false)


  const logos = [
    {
      name: 'WhatsApp',
      logo: <SiWhatsapp />,
      link: 'https://wa.link/abicmz'
    },
    {
      name: 'Facebook',
      logo: <SiFacebook />,
      link: 'https://www.facebook.com/solve.limitada'
    },
    {
      name: 'Instagram',
      logo: <SiInstagram />,
      link: 'https://www.instagram.com/solveingenieria/'
    },
  ]

  const copyright = `© 2024 Solve Ltda. Todos los derechos reservados`
  return (
    <div className='Footer'>

      <section className='info'>

        <div className='infoBlockContainer'>
          
          <div className='infoBlock'>
          
          <Link to='/' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {(hover) 
              ? <LogoSolve key={'grey'} className='logoSolve' fill='var(--penn-blue)'/>
              : <LogoSolve key={'white'} className='logoSolve' fill='white'/> 
            }
          </Link>
            
            <div className='socialMedia'>
              {logos.map(elemento => {
                return (
                  <Link to={elemento.link}>
                    {elemento.logo}
                  </Link>
                )
              })}
              {/* <SiWhatsapp/>
              <SiFacebook />
              <SiInstagram /> */}
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