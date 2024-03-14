import React from 'react'
import './MockUp.scss'

import { RxDividerHorizontal } from "react-icons/rx";

const imageCont = 
    (
        <section className='image'>
          <figure>
            <img src='https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1b' alt="" />
          </figure>
        </section>
    )

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rerum doloribus ratione, eveniet impedit eaque vitae quos, eum nulla libero quaerat necessitatibus, ut quisquam pariatur minima illo qui vel voluptatum.`
const descriptionCont = 
    (
          <section className='description'>

            <div className='descContainer'>
                <h3><RxDividerHorizontal/>Introducción</h3>
                <h1>Title Description</h1>
                <p>{lorem}</p>
                <p>{lorem}</p>
                <p>{lorem}</p>
            </div>

            <div className='more-data'>
                <p>More data</p>
            </div>

          </section>
    )

function MockUpDef() {
  return (
    <>
        {imageCont}
        {descriptionCont}
    </>
  )
}
function MockUpReverse() {
  return (
    <>
        {descriptionCont}
        {imageCont}
    </>
  )
}

export { MockUpDef, MockUpReverse }