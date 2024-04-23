import React from 'react'

import './index.scss'
import { TextBlog } from './TextBlog'

function BlogEntry() {
  return (
    <div className='BlogEntry'>
      
      <section className='presentation'>
        <figure>
          <img src="https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </figure>
      </section>

      <section className='writing'>

        <div className='text-container'>
          <TextBlog/>
        </div>

      </section>

    </div>
  )
}

export { BlogEntry }