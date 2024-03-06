import React from 'react'
import './index.scss'

import { QuestionBlock } from './QuestionBlock'
import { StillNotAnswer } from './StillNotAnswer'

function FAQs() {
    const title = 'Preguntas frecuentes (FAQs)'
  return (
    <div className='FAQs'>
        
        <section className='title'>
            <h1>{title}</h1>
            <p>Preguntame, preguntame</p>
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