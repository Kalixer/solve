import React from 'react'
import './FastTrustData.scss'

import { TfiHeadphoneAlt } from "react-icons/tfi";

function FastTrustData() {
  const texto = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cupiditate ad nesciunt `
  return (
    <div className='FastTrustData'>
      <li className='fast-container'>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Cálculo estructural</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Arquitectura</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Casas Tipo</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Llave en mano</h3>
          <p>{texto}</p>
        </ul>
      </li>
    </div>
  )
}

export { FastTrustData }