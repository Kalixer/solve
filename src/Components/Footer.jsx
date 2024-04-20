import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.scss'

import {ReactComponent as LogoSolve } from '../solveLogoMin.svg'

import { SiWhatsapp } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { scrollToTop } from '../utils/scrollToTop';

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

  const handleMail = () => {
    const subject = 'Quiero saber más de tu empresa'
    const message = 'Hola Solve. Mi nombre es [Nombre], estaba viendo tu sitio web y deseo saber más sobre los servicios que ofreces. Espero poder estar en contacto pronto'

    const $buttonMailto = document.querySelector('#trucazo')
    $buttonMailto.setAttribute('href', 
    `mailto:al.caceres.ag72@gmail.com?subject=${subject} &body=${message}`)
    $buttonMailto.click()
  }

  const handleLogo = () => {
    scrollToTop()
  }


  return (
    <div className='Footer'>

      <section className='info'>

        <div className='infoBlockContainer'>
          
          <div className='infoBlock'  onClick={handleLogo}>
            
          
          <Link to='/' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {(hover) 
              ? <LogoSolve key={'grey'} onClick={scrollToTop} className='logoSolve' fill='var(--penn-blue)'/>
              : <LogoSolve key={'white'} onClick={scrollToTop} className='logoSolve' fill='white'/> 
            }
            <h1>SOLVE</h1>
          </Link>
            
            
          </div>

          <div className='infoBlock infoContact'>
            <h3>Contact</h3>
            <div className='info_P'>
              <p onClick={handleMail}>solve@solve.cl</p>
              <a href="mailto:al.caceres.ag72@gmail.com" id="trucazo"> </a>
              {/* <p></p> */}
              <Link to='https://wa.link/abicmz'>
                <p>+569 7977 1139</p>
              </Link>
            </div>
          </div>


          <div className='infoBlock infoInput'>
            <h3>Follow us</h3>
            
            <div className='socialMedia'>
              {logos.map(elemento => {
                return (
                  <Link to={elemento.link} key={elemento.name}>
                    {elemento.logo}
                  </Link>
                )
              })}
            </div>

          </div>
        </div>
        {/* <form className='infoBlock infoInput'>
          <h3>Email input</h3>
          <p>Enter your email and we'll get in touch</p>
          <div className='inputSubmit'>
            <input type="text" placeholder='email@email.com'/>
            <button type='button'>Submit</button>
          </div>
        </form> */}

      </section>

      <section className='copyright'>
        <p>{copyright}</p>
      </section>
    </div>
  )
}

export { Footer }