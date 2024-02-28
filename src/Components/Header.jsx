import React from 'react';
import '../styles/Header.scss';
import luthorLogo from '../assets/luthorLogo.png';

function Header() {
  return (
    <div className='Header'>
      <figure className='logo'>
        <img src={luthorLogo} alt="" />
      </figure>
      <li>
        <ul>Ingeniería y Cálculo</ul>
        <ul>Construcción</ul>
        <ul>Casas</ul>
        <ul>Ampliaciones</ul>
      </li>
    </div>
  )
}

export { Header }