import React from 'react'
import './MockUp.scss'

import { RxDividerHorizontal } from "react-icons/rx";


const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rerum doloribus ratione, eveniet impedit eaque vitae quos, eum nulla libero quaerat necessitatibus, ut quisquam pariatur minima illo qui vel voluptatum.`


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

            <div className='more-data'>
                <p>{moreData}</p>
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

            <div className='more-data'>
                <p>{moreData}</p>
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