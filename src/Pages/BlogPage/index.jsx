import React from 'react'
import { IntroPicture } from '../../Components/IntroPicture'
import './index.scss'

function BlogPage() {
    const image = 'https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
    const title = 'Solve Blog'
    const titleDesc = '¿Quieres saber más de nosotros?'
  return (
    <div className='BlogPage'>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
    </div>
  )
}

export { BlogPage }