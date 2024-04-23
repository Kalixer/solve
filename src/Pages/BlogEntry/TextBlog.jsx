import React from 'react'
import './TextBlog.scss'

function TextBlog() {
  return (
    <div className='TextBlog'>
        <div className='h1-container'>
          <h1>Blog Entry</h1>
        </div>
        
        <div className='p-container'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
        </div>
        
        <div className='imageContainer'>
            <figure>
                <img src="https://images.pexels.com/photos/51320/drill-milling-milling-machine-drilling-51320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </figure>
        </div>

        <div className='p-container'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa facere officiis! Itaque, sed provident praesentium cumque quisquam quidem nesciunt! Alias quam possimus, dolores voluptatum reprehenderit eveniet at cumque recusandae!</p>
        </div>
    </div>
  )
}

export { TextBlog }