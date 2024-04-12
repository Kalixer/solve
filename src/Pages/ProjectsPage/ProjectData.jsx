import React from 'react'
import './ProjectData.scss'

function ProjectData({areaSolve, client, clientLogo='null', houseType, info}) {
    const [index, setIndex] = React.useState(0)
    const [intervalId, setIntervalId] = React.useState(null)

    React.useEffect(() => {
        if(!intervalId && index <= 3){
            const intervalId = setInterval(() => {
                setIndex(prevIndex => prevIndex + 1)
            }, 5000)
            
            return () => {
                if(intervalId) {
                    clearInterval(intervalId)
                    setIntervalId(null)
                }
            }
        }

    }, [])

    if(index === 4) {
        setIndex(0)
    }
    
    
    const dataBase = [
        {
            title: `Area de Solve`,
            parrafo: areaSolve,
        },
        {
            title: `Cliente`,
            parrafo: client,
        },
        {
            title: `Tipo de casa`,
            parrafo: houseType,
        },
        {
            title: `Información`,
            parrafo: info,
        },
    ]
    const dataBlocks = [
        (
            <div className='infoBlock'>
                <h3>Area de Solve</h3>
                <p>{areaSolve}</p>

            </div>
        ),
        (
            <div className='infoBlock'>
                <h3>Cliente</h3>
                <p>{client}</p>
            </div>
        ),
        (
            <div className='infoBlock'>
                <h3>Tipo de casa</h3>
                <p>{houseType}</p>
            </div>
        ),
        (
            <div className='infoBlock'>
                <h3>Información</h3>
                <p>{info}</p>
            </div>
        ),
    ]
    let dataBlock = dataBlocks[index]

    

    // if(index <= 3) {
    //     let dataDisplay = (
    //         <div className='infoBlock'>
    //             <h3>{dataBase[index].title}</h3>
    //             <p>{dataBase[index].parrafo}</p>
    //         </div>
    //     )
    // }




  return (
    <>
        <div className='ProjectData deskView'>

            <div className='infoBlock'>
                <h3>Area de Solve</h3>
                <p>{areaSolve}</p>
            </div>

            <div className='infoBlock'>
                <h3>Cliente</h3>
                <p>{client}</p>
            </div>

            <div className='infoBlock'>
                <h3>Tipo de casa</h3>
                <p>{houseType}</p>
            </div>

            <div className='infoBlock'>
                <h3>Información</h3>
                <p>{info}</p>
            </div>

        </div>

        <div className='ProjectData mobView'>
            {dataBlock}
        </div>
    </>

    
  )
}

export { ProjectData }