import React from 'react'
import './InfoIntro.scss'

import { BsViewList } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";

function InfoIntro({toggleDisplay}) {
  return (
    <div className='InfoIntro'>
        <div className='masterContainer'>

            <section className='textSection'>
                <h3>Recent Entries</h3>
            </section>
    
            <section className='boxSection'> 
                <div className='boxContainer'>
                    {/* Aquí tienes que hacer un handleClick que cambie el display */}
                    <div className='box' onClick={() => toggleDisplay(true)}><BsViewList /></div>
                    <div className='box' onClick={() => toggleDisplay(false)}><BsGrid /></div>
                </div>
            </section>

        </div>
    </div>
  )
}

export { InfoIntro }