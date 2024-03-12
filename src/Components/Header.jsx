import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import { scrollToTop } from '../utils/scrollToTop';
import { MyContext } from '../hooks/MyContext.js'

import {ReactComponent as LogoSolve } from '../assets/solveLogo-min.svg'


function Header() {
  const { language, setLanguage } = React.useContext(MyContext)
  
  const [hover, setHover] = React.useState(false)



  const sections = [
    {
      title: 'Home',
      path: '/'  
    },
    {
      title: 'Ingeniería',
      path: '/engineering'  
    },
    {
      title: 'Construcción',
      path: '/construction'  
    },
    {
      title: 'Blog',
      path: '/dev'  
    },
    {
      title: 'FAQs',
      path: '/faqs' 
    },
    {
      title: 'Contacto',
      path: '/contact' 
    },
  ]
  
  const toggleLang = () => {
    if(language === 'es') {
      setLanguage('en')
    }
    if(language === 'en') {
      setLanguage('es')
    }
  }

  return (
    <div className='Header'>
      <div className='logoContainer' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Link to='/'>
          {(hover) 
            ? <LogoSolve key={'grey'} className='logoSolve' fill='var(--penn-blue)'/>
            : <LogoSolve key={'white'} className='logoSolve' fill='white'/> 
          }
        <h1>Solve</h1>
        </Link>
      </div>
      <li>
        {sections.map(item => (
          <Link to={item.path} key={item.title} onClick={scrollToTop}>
            <ul>{item.title}</ul>
          </Link>
        ))}
        <button className='languageToggle' onClick={toggleLang}>{language}</button>
      </li>
    </div>
  )
}

export { Header }