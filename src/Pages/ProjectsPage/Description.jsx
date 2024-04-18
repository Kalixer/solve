import React from 'react'
import { MyContext } from '../../hooks/MyContext'
import './Description.scss'

function Description({areaSolve, review}) {
    const { 
      typeChanges, 
      setTypeChanges, 
      selected,
      setSelected,
      unselected,
      setUnselected,
      typeProject, 
      setTypeProject,
    } = React.useContext(MyContext)

    React.useEffect(() => {
      if(typeChanges === 0 || typeChanges % 2 === 0) {
        setUnselected('false')
        setSelected('true')
      } else {
        setUnselected('true')
        setSelected('false')
      }
    }, [typeChanges, setSelected, setUnselected])

    const inverse = () => {
      setTypeChanges(typeChanges + 1)
      if(typeProject === 'Engineering'){
        setTypeProject('Construction')
      } else if (typeProject === 'Construction'){
        setTypeProject('Engineering')
      }
    }

    console.log(typeChanges)
    console.log(unselected, selected)

    console.log()
    // const review = `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae repudiandae, iste sed dolore fuga ipsa praesentium error doloribus! Asperiores est maiores inventore et adipisci vitae, nisi vero quam itaque."`
  return (
    <div className='Description'>
        <div className='categoryContainer'>
            <p className={`category category-${selected}`} onClick={() => inverse()}>Solve Ingeniería</p>
            <p className={`category`}>/</p>
            <p className={`category category-${unselected}`} onClick={() => inverse()}>Solve Construcción</p>
        </div>
        <h1>Solve {areaSolve}</h1>

        <section className='reviewContainer'>
            <h3>Reseña</h3>
            <p>"{review}"</p>
        </section>
    </div>
  )
}

export { Description }