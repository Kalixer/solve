import React from 'react'
import './BlogDisplayIntro.scss'

function BlogDisplayIntro({image, title, description, author}) {
    // const image = 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // const image = ''

  return (
    <div className='BlogDisplayIntro'>

        <div className='masterContainer'>
            
            {/* <section className='date'>

            </section> */}

            <section className='image'>
                <figure>
                    <img src={image} alt="" />
                </figure>
            </section>

            <section className='info'>

                <div className='texto'>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>

                <p>{author}</p>
            </section>

        </div>

    </div>
  )
}

export { BlogDisplayIntro }