import React from 'react'

import './index.scss'

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
          
          <div className='h1-container'>
            <h1>Blog Entry</h1>
          </div>

          <div className='p-container'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
          </div>

        </div>

      </section>

    </div>
  )
}

export { BlogEntry }