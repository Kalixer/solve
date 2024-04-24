import React from 'react'
import { BlogDisplayIntro } from '../BlogPage/BlogDisplayIntro'
import './MoreRead.scss'

import { entries } from '../../database/blogs'
import { MyContext } from '../../hooks/MyContext'
import { randomRange } from '../../utils/randomRange'

function MoreRead() {
  const {blogIndex} = React.useContext(MyContext)
  const totalBlogs = entries.length

  let blogIndexOne 
  let blogIndexTwo
  let assigned = false

  while(!assigned) {
    blogIndexOne = randomRange(0, totalBlogs - 1)
    blogIndexTwo = randomRange(0, totalBlogs - 1)

    if (blogIndexOne !== blogIndex && blogIndexTwo !== blogIndex){
      if(blogIndexOne === blogIndexTwo) {
        assigned = false
      } else {
        assigned = true
      } 
    }
  }

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
              index={blogIndexOne}
              image={entries[blogIndexOne].image}
              title={entries[blogIndexOne].title} 
              description={entries[blogIndexOne].descriptionSummed} 
              author={entries[blogIndexOne].author}
              displayList={false}
            />
            <BlogDisplayIntro 
              index={blogIndexTwo}
              image={entries[blogIndexTwo].image}
              title={entries[blogIndexTwo].title} 
              description={entries[blogIndexTwo].descriptionSummed} 
              author={entries[blogIndexTwo].author}
              displayList={false}
            />
        </div>

    </section>
  )
}

export { MoreRead }