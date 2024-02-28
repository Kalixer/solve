import React from 'react';
import '../styles/AboutUs.scss';
import houseInteriorVertical from '../assets/houseInteriorVertical.jpg'
function AboutUs() {
  return (
    <div className='AboutUs'>
        <section className='contentDescript'>
            <div className='text'>
                <p>About Us</p>
                <h1>Title of Description</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam architecto vel vero nesciunt ex eligendi, excepturi molestiae dolor exercitationem asperiores adipisci minima recusandae voluptatem obcaecati quisquam quos maxime ut!</h3>
            </div>
            <div className='boton'>
                <button type='button'>Click me!</button>
            </div>
        </section>

        <section className='imagePresentation'>
            <figure>
                <img src={houseInteriorVertical} alt="" />
            </figure>
        </section>
    </div>
  )
}

export { AboutUs }