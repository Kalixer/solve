import React from 'react'
import { IntroPicture } from '../Components/IntroPicture'

function NotFound() {
    const image = 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
    const title = '404 Not found'
    const titleDesc = `The page you're looking for, doesn't exist`
  return (
    <div className='NotFound'>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
    </div>
  )
}

export { NotFound }