import React from 'react'
import './index.scss'

import { QuestionBlock } from './QuestionBlock'
import { StillNotAnswer } from './StillNotAnswer'

function FAQs() {
    const title = 'Preguntas frecuentes (FAQs)'
    const image = 'https://images.pexels.com/photos/1038260/pexels-photo-1038260.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
  return (
    <div className='FAQs'>
        
        <section className='title'>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div>
                <h1>{title}</h1>
                <p>Preguntame, preguntame</p>
            </div>
        </section>

        <section className='questions'>

            <div className='questionsBlock'>
                <h2>Ingeniería</h2>
                <div className='block'>
                    <QuestionBlock/>
                    <QuestionBlock/>
                    <QuestionBlock/>
                </div>
            </div>

            <div className='questionsBlock'>
                <h2>Construcción</h2>
                <div className='block'>
                    <QuestionBlock/>
                    <QuestionBlock/>
                    <QuestionBlock/>
                </div>
            </div>

        </section>

        <StillNotAnswer/>
    </div>
  )
}

export { FAQs }