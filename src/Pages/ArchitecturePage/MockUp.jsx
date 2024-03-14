import React from 'react'
import './MockUp.scss'

const imageCont = 
    (
        <section className='image'>
          <figure>
            <img src='https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1b' alt="" />
          </figure>
        </section>
    )

const descriptionCont = 
    (
          <section className='description'>

            <div className='descContainer'>
              <h2>Title Description</h2>
              <p>Description</p>
            </div>

            <div>
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