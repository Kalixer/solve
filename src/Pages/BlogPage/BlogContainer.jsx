import React from 'react'
import './BlogContainer.scss'
import { BlogDisplayIntro } from './BlogDisplayIntro'

function BlogContainer({displayList}) {

  // Tengo que meter esto en un array de objetos
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
      description: 'Ofrecemos una metodología que no solo satisface tus necesidades actuales, sino que también te prepara para lo que viene. Imagina la libertad de ampliar tu casa sin las complicaciones de una construcción tradicional. Con nuestro enfoque revolucionario, cada casa es una inversión en tu futuro.'
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
    <div className='BlogContainer'>
      <div className={ displayList ? 'listContainer' : 'gridContainer' }>

        {entries.map(entry => { 
          return (
          <BlogDisplayIntro 
            image={entry.image}
            title={entry.title} 
            description={displayList ? entry.description : entry.descriptionSummed} 
            author={entry.author}
            displayList={displayList}
          />
          )
        })}
        
      </div>
    </div>
  )
}

export { BlogContainer }