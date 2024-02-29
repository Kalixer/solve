import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logoSolve from '../assets/logoSolve.png'

function Header() {
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
      title: 'Contacto',
      path: '/dev' 
    },
]

  return (
    <div className='Header'>
      <figure className='logo'>
        <img src={logoSolve} alt="" />
      </figure>
      <li>
        {sections.map(item => (
          <Link to={item.path}>
            <ul>{item.title}</ul>
          </Link>
        ))}
      </li>
    </div>
  )
}

export { Header }