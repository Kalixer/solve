import React from 'react'
import './PresentationIng.scss'

function PresentationIng() {
  const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias commodi veniam sed! Alias error placeat molestiae natus vitae hic dolor officia illo, quia esse quae temporibus facere laudantium iusto.`
  const image = 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='PresentationIng'>

      <section className='sectionContainer imageContainer'>
        <figure>
          <img src={image} alt="" />
          <div className='boxBack'>
            <div className='boxFront'>
              <p>Más de 15 años de experienca</p>
            </div>
          </div>
        </figure>
      </section>
    
      <section className='sectionContainer constDescription'>
        <div className='texto'>
          <p>Engineering? We got it</p>
          <h1>Solve Ingeniería</h1>
          <p>{desc}</p>
        </div>
      </section>
    
    </div>
  )
}

export { PresentationIng }