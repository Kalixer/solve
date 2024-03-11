import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import { scrollToTop } from '../utils/scrollToTop';

import {ReactComponent as LogoSolve } from '../assets/solveLogo-min.svg'

const sections = [
  {
    title: 'Home',
    path: '/'  
  },
  {
    title: 'Ingeniería y Cálculo',
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

function Header() {
  const [hover, setHover] = React.useState(false)
  const [lang, setLang] = React.useState('es')
  
  const toggleLang = () => {
    if(lang === 'es') {
      setLang('en')
    }
    if(lang === 'en') {
      setLang('es')
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
        <button className='languageToggle' onClick={toggleLang}>{lang}</button>
      </li>
    </div>
  )
}

export { Header }