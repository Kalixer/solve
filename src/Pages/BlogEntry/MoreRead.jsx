import React from 'react'
import { BlogDisplayIntro } from '../BlogPage/BlogDisplayIntro'
import './MoreRead.scss'


function MoreRead() {

  const entries = [
    {
      author: 'Kalixer & ChatGPT',
      title: 'Metalcon: Ventajas y Usos',
      image: 'https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Descubre el mundo de Metalcon y desentraña sus ventajas. Desde su origen hasta su aplicabilidad en diversos proyectos, sumérgete en este material versátil. Explora su resistencia, durabilidad y eficiencia, convirtiéndolo en una opción destacada en la construcción. Acompáñanos en este emocionante viaje hacia el universo de Metalcon'
    },
    {
      author: 'Kalixer & ChatGPT',
      title: 'Tubest: Ventajas y Usos',
      image: 'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sumérgete en el fascinante mundo de Tubest y desentraña sus numerosas ventajas. Desde su definición hasta su aplicación en una variedad de contextos, este material innovador promete transformar tus proyectos. Exploraremos su resistencia, versatilidad y eficiencia, convirtiéndolo en una opción destacada en diversas industrias. Acompáñanos en este emocionante viaje hacia el universo de Tubest.'
    },
    {
      author: 'Kalixer & ChatGPT',
      title: 'Diseño modular, ¿realmente necesitaré una ampliación?',
      image: 'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Nuestra metodología también te prepara para el futuro. Imagina la libertad de ampliar tu casa sin las complicaciones de una construcción tradicional. Con nuestro enfoque revolucionario, cada casa es una inversión en tu futuro.'
    },
  ]

  const summerUp = (text) => {
    let endChar = text.indexOf('.') + 1
    let descriptionSummed = text.slice(0, endChar)
    return descriptionSummed
  }

  entries.forEach(entry => {
    entry.descriptionSummed = summerUp(entry.description)
  })


  return (
    <section className='MoreRead'>

        <div className='titleContainer'>
          <h1>Wanna read more</h1>
        </div>

        <div className='entries'>
            <BlogDisplayIntro 
              image={entries[0].image}
              title={entries[0].title} 
              description={entries[0].descriptionSummed} 
              author={entries[0].author}
              displayList={false}
            />
            <BlogDisplayIntro 
              image={entries[1].image}
              title={entries[1].title} 
              description={entries[1].descriptionSummed} 
              author={entries[1].author}
              displayList={false}
            />
        </div>

    </section>
  )
}

export { MoreRead }