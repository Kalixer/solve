import React from 'react'

import './index.scss'
import { TextBlog } from './TextBlog'
import { MoreRead } from './MoreRead'


import { MyContext } from '../../hooks/MyContext'
import { entries } from '../../database/blogs'


function BlogEntry() {
  const {blogIndex} = React.useContext(MyContext)

  const entry = entries[blogIndex]
  return (
    <div className='BlogEntry'>
      
      <section className='presentation'>
        <figure>
          <img src={entry.image} alt="" />
        </figure>
      </section>

      <section className='writing'>

        <div className='text-container'>
          <TextBlog/>
        </div>

      </section>

      <MoreRead/>

    </div>
  )
}

export { BlogEntry }