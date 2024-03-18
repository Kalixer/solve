import React from 'react';
import './AboutUs.scss';
import houseInteriorVertical from '../../assets/houseInteriorVertical.jpg'

function AboutUs() {
    const image = 'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // const image = 'https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const about = (
        <>
            <h3>
                Solve es una empresa de servicios cuyo principal objetivo es re<strong>solve</strong>r las necesidades de sus clientes. 
            </h3>
            <h3>
                Para ello abarcamos tres líneas de negocio: <strong>Ingeniería, Construcción e Industrial.</strong> <br />
                Las cuales, aunque independientes, son especialistas en su área y actúan sinérgicamente en respuestas a las demandas que  presentan nuestros clientes
            </h3>
        </>
    )

    return (
      <div className='AboutUs'>
          <section className='contentDescript'>
              <div className='text'>
                  <p>Sobre nosotros</p>
                  <h1>Nuestra Empresa</h1>
                    {about}
              </div>
              {/* <div className='boton'>
                  <button type='button'>Click me!</button>
              </div> */}
          </section>

          <section className='imagePresentation'>
              <figure>
                  <img src={image} alt="" />
              </figure>
          </section>
      </div>
    )
}

export { AboutUs }