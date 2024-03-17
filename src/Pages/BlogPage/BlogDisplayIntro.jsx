import React from 'react'
import './BlogDisplayIntro.scss'

function BlogDisplayIntro({image, title, description, author, displayList}) {

  return (
    <div className={displayList ? 'BlogDisplayIntro' : 'BlogDisplayGrid'}>

        <div className={displayList ? 'listView': 'gridView'}>
            
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