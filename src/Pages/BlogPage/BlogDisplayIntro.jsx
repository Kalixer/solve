import React from 'react'
import { Link } from 'react-router-dom'
import './BlogDisplayIntro.scss'

function BlogDisplayIntro({image, title, description, author, displayList}) {

  return (
    <div className={displayList ? 'BlogDisplayIntro' : 'BlogDisplayGrid'}>

        <div className={displayList ? 'listView': 'gridView'}>
            
            {/* <section className='date'>

            </section> */}

            <section className='image' >
                <Link to='/blogEntry'>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </Link>
            </section>

            <section className='info'>

                <div className='texto'>
                    <Link to='/blogEntry'>
                        <h2>{title}</h2>
                    </Link>
                    <h3>{description}</h3>
                </div>

                <p>{author}</p>
            </section>

        </div>

    </div>
  )
}

export { BlogDisplayIntro }