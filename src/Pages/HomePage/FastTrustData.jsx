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
          <h3>Title</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Title</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Title</h3>
          <p>{texto}</p>
        </ul>
        <ul className='fast-block'>
          <TfiHeadphoneAlt/>
          <h3>Title</h3>
          <p>{texto}</p>
        </ul>
      </li>
    </div>
  )
}

export { FastTrustData }