import React from 'react'
import './BlogContainer.scss'
import { BlogDisplayIntro } from './BlogDisplayIntro'

function BlogContainer() {

  const image1 = 'https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const image2 = 'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const image3 = 'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  const title1 = 'Metalcon: Ventajas y Usos'
  const title2 = 'Tubest: Ventajas y Usos'
  const title3 = 'Diseño modular, ¿realmente necesitaré una ampliación?'
  const description1 = 'Descubre el mundo de Metalcon y desentraña sus ventajas. Desde su origen hasta su aplicabilidad en diversos proyectos, sumérgete en este material versátil. Explora su resistencia, durabilidad y eficiencia, convirtiéndolo en una opción destacada en la construcción. Acompáñanos en este emocionante viaje hacia el universo de Metalcon'
  const description2 = 'Sumérgete en el fascinante mundo de Tubest y desentraña sus numerosas ventajas. Desde su definición hasta su aplicación en una variedad de contextos, este material innovador promete transformar tus proyectos. Exploraremos su resistencia, versatilidad y eficiencia, convirtiéndolo en una opción destacada en diversas industrias. Acompáñanos en este emocionante viaje hacia el universo de Tubest.'
  const description3 = 'Ofrecemos una metodología que no solo satisface tus necesidades actuales, sino que también te prepara para lo que viene. Imagina la libertad de ampliar tu casa sin las complicaciones de una construcción tradicional. Con nuestro enfoque revolucionario, cada casa es una inversión en tu futuro.'
  const author1 = 'Kalixer & ChatGPT'
  const author2 = 'Kalixer & ChatGPT'
  const author3 = 'Kalixer & ChatGPT'

  return (
    <div className='BlogContainer'>
      <div className='container'>
        <BlogDisplayIntro 
          image={image1}
          title={title1} 
          description={description1} 
          author={author1}/>
        <BlogDisplayIntro 
          image={image2}
          title={title2} 
          description={description2} 
          author={author2}/>
        <BlogDisplayIntro 
          image={image3}
          title={title3} 
          description={description3} 
          author={author3}/>
      </div>
    </div>
  )
}

export { BlogContainer }