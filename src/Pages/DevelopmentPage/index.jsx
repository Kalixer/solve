import React from 'react'
import { IntroPicture } from '../../Components/IntroPicture'

function DevelopmentPage() {
    const image = 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const title = 'Page under development'
    const titleDesc = 'Soon we will have it operational'
  return (
    <div className='DevelopmentPage'>
        <IntroPicture image={image} title={title} titleDesc={titleDesc}/>
    </div>
  )
}

export { DevelopmentPage }