import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop'
import { CardMk2 } from './CardMk2'

import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

import { clients } from '../../database/clients';

function OurClients({type}) {

  // inicializar la lista de clientes
  const clientList = []

  if(type === 'Engineering'){
    // Añadir los clientes que tienen que ver con ingeniería
    clients.forEach(element => {
      if (element.type === 'company'){
        clientList.push(element)
      }
    })
  }
  if(type === 'Construction') {
    clients.forEach(element => {
      if(element.type === 'house'){
        clientList.push(element)
      }
    })
  }

  
  // client es para ver el cliente actual
  const [client, setClient] = React.useState(clientList[0])
  
  // Este número lo cambias al hacer click
  const [iterator, setIterator] = React.useState(0)
  
  const [currentImage, setCurrentImage] = React.useState(client.images[0])
  
  // console.log(iterator)

  const handleClickAdd = () => {
    if(iterator + 1 >= clientList.length){
      setIterator(0)
    } else {
      setIterator(iterator + 1)
    }
    
  }
  
  const handleClickSustract = () => {
    if(iterator - 1 < 0){
      setIterator(clientList.length - 1)
    } else {
      setIterator(iterator - 1)
    }
    
  }
  
  // esto es para que cambie la imagen que se muestra
  React.useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = client.images.findIndex(img => img === prevImage)
        const nextIndex = (currentIndex + 1) % client.images.length 
        return client.images[nextIndex]
      })
    }, 3000)

    return () => clearInterval(intervalId)
  }, [client.images, client])

  React.useEffect(() => {
    setClient(clientList[iterator])
  }, [iterator])  // eslint-disable-line react-hooks/exhaustive-deps


  
    return (
        <div className='OurClientsConstruction'>
    
          <section className='clientContainer'>

            <div className='userComment'>
              <h1>Clientes que han confiado en nosotros</h1>
              <h3>{client.name}</h3>
            </div> 

            <div className='proyectPanel'>
              <Link to='/projects' onClick={scrollToTop}>
                <button>Ver todos los proyectos</button>
              </Link>
              <div className='navButton'>  
                <LuChevronLeft onClick={handleClickSustract}/>
                <LuChevronRight onClick={handleClickAdd}/>
              </div>
            </div>
    
          </section>
          <CardMk2 client={client} currentImage={currentImage}/>
        </div>
      )
}

export { OurClients }