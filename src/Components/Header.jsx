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

  // React.useEffect(() => {
  //   if(hover) {
  //     console.log('hover')
  //   } else {
  //     console.log('not hover')
  //   }
  // })

  return (
    <div className='Header'>
      <div className='logoContainer' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Link to='/'>
          {(hover) 
            ? <LogoSolve key={'grey'} className='logoSolve' fill='grey'/>
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
      </li>
    </div>
  )
}

export { Header }