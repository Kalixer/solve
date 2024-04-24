import React from 'react'
import './BlogContainer.scss'
import { BlogDisplayIntro } from './BlogDisplayIntro'

import { entries } from '../../database/blogs'

function BlogContainer({displayList}) {


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
            key={entry.index}
            index={entry.index}
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