import React from 'react'
import './MockUp.scss'

import { RxDividerHorizontal } from "react-icons/rx";


function MockUpDef({image, introduction, title, text, moreData}) {
  return (
    <>
        <section className='image'>
          <figure>
            <img src={image} alt="" />
          </figure>
        </section>


        <section className='description'>

            <div className='descContainer'>
                <h3><RxDividerHorizontal/>{introduction}</h3>
                <h1>{title}</h1>
                {text}
            </div>

            <div className='ventajas'>
                <h3>Ventajas</h3>
                {moreData}
            </div>

        </section>
    </>
  )
}
function MockUpReverse({image, introduction, title, text, moreData}) {
  return (
    <>
        <section className='description'>

            <div className='descContainer'>
                <h3><RxDividerHorizontal/>{introduction}</h3>
                <h1>{title}</h1>
                {text}
            </div>

            <div className='ventajas'>
                <h3>Ventajas</h3>
                {moreData}
            </div>

        </section>
        
        
        <section className='image'>
          <figure>
            <img src={image} alt="" />
          </figure>
        </section>
    </>
  )
}

export { MockUpDef, MockUpReverse }