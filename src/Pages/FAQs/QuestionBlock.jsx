import React from 'react'
import './QuestionBlock.scss';

import { IoIosArrowForward } from "react-icons/io";

function QuestionBlock() {
    const [answerDis, setAnswerDis] = React.useState(false)
    const [rotate, setRotate] = React.useState(false)
    const [isOver, setIsOver] = React.useState(false)

    const toggleAns = () => {
        setAnswerDis(!answerDis)
        setRotate(!rotate)
    }

    const question = 'Pregunta ejemplo para quien quiere preguntar una pregunta'
    const answer = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, accusantium dicta, cum ipsa iusto odio praesentium dolores in laudantium eveniet omnis ut doloribus quisquam a et, sequi harum soluta temporibus?'


  return (
    <div className={`QuestionBlock`}
            onClick={toggleAns}
    >

        <div className='question'>
            <h3>{question}</h3>

            <button 

                className={rotate ? 'rotate' : ''}
                // Esto de MouseOver es solo para que cambie el color
                onMouseOver={() => setIsOver(true)}
                onMouseLeave={() => setIsOver(false)}
            >
                {
                    isOver ? 
                    <IoIosArrowForward fill='black'/>
                    : <IoIosArrowForward fill='grey'/>
                }
            </button>
            
        </div>
            <div 
                className={answerDis ? 'answer' : 'none'}
            >
                <p>{answer}</p>
            </div>
    </div>
  )
}

export { QuestionBlock }