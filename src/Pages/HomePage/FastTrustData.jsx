import React from 'react'
import './FastTrustData.scss'

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuBuilding2 } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuKeyRound } from "react-icons/lu";


function FastTrustData() {
  const texto = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cupiditate ad nesciunt `
  return (
    <div className='FastTrustData'>
      <li className='fast-container'>
        <ul className='fast-block'>
          <LuPencilRuler />
          <h3>Cálculo estructural</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <LuBuilding2 />
          <h3>Arquitectura</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <LuHome />
          <h3>Casas Tipo</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <LuKeyRound />
          <h3>Llave en mano</h3>
          <p>{texto}</p>
        </ul>
      </li>
    </div>
  )
}

export { FastTrustData }