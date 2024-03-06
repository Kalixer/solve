import React from 'react'
import './QuestionBlock.scss';

function QuestionBlock() {
    const [answerDis, setAnswerDis] = React.useState(false)

    const toggleAns = () => {
        setAnswerDis(!answerDis)
    }

    const answer = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, accusantium dicta, cum ipsa iusto odio praesentium dolores in laudantium eveniet omnis ut doloribus quisquam a et, sequi harum soluta temporibus?'


  return (
    <div className='QuestionBlock'>
        <div className='question'>
            <h3>Pregunta ejemplo para quien quiere preguntar una pregunta</h3>
            <button onClick={toggleAns}>V</button>
        </div>
        
        {answerDis 
            ?        
            <div className='answer'>
                <p>{answer}</p>
            </div>
            :
            null
        }
    </div>
  )
}

export { QuestionBlock }