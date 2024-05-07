import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import { scrollToTop } from '../utils/scrollToTop';
import { MyContext } from '../hooks/MyContext.js'

import { headerLanguage } from '../database/language/header.js';

import {ReactComponent as LogoSolve } from '../solveLogoMin.svg'


function Header() {
  const { languageEs, setLanguageEs } = React.useContext(MyContext)
  
  const [hover, setHover] = React.useState(false)
  const [resMenu, setResMenu] = React.useState(false)


  const sections = [
    {
      title: 'Home',
      path: '/'  
    },
    {
      title: languageEs ? headerLanguage.Engineering_Es : headerLanguage.Engineering_En,
      path: '/engineering'  
    },
    {
      title: languageEs ? headerLanguage.Constuction_Es : headerLanguage.Constuction_En,
      path: '/construction'  
    },
    {
      title: languageEs ? headerLanguage.Architecture_Es : headerLanguage.Architecture_En,
      path: '/architecture'  
    },
    {
      title: 'Blog',
      path: '/blog'  
    },
    {
      title: 'FAQs',
      path: '/faqs' 
    },
    {
      title: languageEs ? headerLanguage.Contact_Es : headerLanguage.Contact_En,
      path: '/contact' 
    },
  ]
  
  
  // Esto es para que al hacer el click abra el menu responsive
  const toggleResponsive = () => {
    setResMenu(!resMenu)
  }
  
  const toggleMenu = () => {
    setResMenu(false)
    scrollToTop()
  }
  
  const toggleLang = () => {
    if(languageEs === true) {
      setLanguageEs(false)
    }
    if(languageEs === false) {
      setLanguageEs(true)
    }
  }


  return (
    <div className='Header'>
      <div className='logoContainer' onClick={scrollToTop} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Link to='/'>
          {(hover) 
            ? <LogoSolve key={'grey'} className='logoSolve' fill='var(--penn-blue)'/>
            : <LogoSolve key={'white'} className='logoSolve' fill='white'/> 
          }
        <h1>SOLVE</h1>
        </Link>
      </div>

      <button className='menu-responsive'
        
        onClick={toggleResponsive}
        >
          <div></div>
          <div></div>
          <div></div>
      </button>
      
      
      {/* 
        Esta parte del resMenu y className es para reutilizar el componente 
        y en función del estado mostrar unos estilos u otros
      */}

      <li className={`${!resMenu ? 'display-laptop' : 'display-responsive'} `}>
        {sections.map(item => (
          <Link to={item.path} key={item.title} onClick={toggleMenu}>
            <ul>{item.title}</ul>
          </Link>
        ))}
        <button className='languageToggle' onClick={toggleLang}>{languageEs ? 'es' : 'en'}</button>
      </li>
    </div>
  )
}

export { Header }