import React from 'react'
import { Link } from 'react-router-dom'
import './BlogDisplayIntro.scss'
import { MyContext } from '../../hooks/MyContext'

function BlogDisplayIntro({index, image, title, description, author, displayList}) {
    
    const {setBlogIndex} = React.useContext(MyContext)

    const handleClick = () => {
        setBlogIndex(index)
    }

  return (
    <div className={displayList ? 'BlogDisplayIntro' : 'BlogDisplayGrid'}>

        <div className={displayList ? 'listView': 'gridView'}>
            
            {/* <section className='date'>

            </section> */}

            <section className='image' onClick={handleClick}>
                <Link to='/blogEntry'>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </Link>
            </section>

            <section className='info'>

                <div className='texto'>
                    <Link to='/blogEntry'>
                        <h2 onClick={handleClick}>{title}</h2>
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