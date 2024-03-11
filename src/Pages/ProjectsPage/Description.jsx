import React from 'react'
import './Description.scss'

function Description() {
    const selected = 'true'
    const unselected = 'false'

    const review = `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae repudiandae, iste sed dolore fuga ipsa praesentium error doloribus! Asperiores est maiores inventore et adipisci vitae, nisi vero quam itaque."`
  return (
    <div className='Description'>
        <div className='categoryContainer'>
            <p className={`category category-${unselected}`}>Solve Ingeniería</p>
            <p className={`category`}>/</p>
            <p className={`category category-${selected}`}>Solve Construcción</p>
        </div>
        <h1>Solve Construcción</h1>

        <section className='reviewContainer'>
            <h3>Reseña</h3>
            <p>{review}</p>
        </section>
    </div>
  )
}

export { Description }