import React from 'react'
import './StillNotAnswer.scss'

import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function StillNotAnswer() {
    const image = 'https://images.pexels.com/photos/952594/pexels-photo-952594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const handleMail = () => {
        console.log('Send Email')
    }
    const handleCall = () => {
        console.log('Call')
    }

    const mensaje = (
            <p>Para saber más, ponte en contacto con nosotros <strike>en </strike> 
                <strong onClick={handleMail}>solve@solve.cl</strong> 
            <strike> o </strike> llámanos <strike>al </strike>
                <strong onClick={handleCall}>+569 7977 1139</strong>
            </p>
        )

  return (
    <section className='StillNotAnswer'>

        <figure>
            <img src={image} alt="" />
        </figure>
        
        <div className='contact'>
            
            <div className='text'>
                <h2>¿Tienes más preguntas?</h2>
                {mensaje}
            </div>

            <div className='rrss'>
                <div className='cuadrado'>
                    <BsWhatsapp/>
                </div>
                <div className='cuadrado'>
                    <MdOutlineEmail/>
                </div>
                <div className='cuadrado'>
                    <IoCallOutline/>
                </div>
            </div>

        </div>

    </section>
  )
}

export { StillNotAnswer }