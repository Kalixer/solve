import React from 'react'
import './OurClientsLogos.scss'

function OurClientsLogos() {
  const title = 'Empresas que han confiado en nosotros'

  const companies = [
    {
      name: 'Entel',
      logo: 'https://seeklogo.com/images/E/entel-logo-CACC7DD81C-seeklogo.com.png',
    },
    {
      name: 'PSC Ingeniería',
      logo: 'https://www.pscingenieria.com/images/LOGO_2015.png',
    },
    {
      name: 'Bechtel Ingeniería',
      logo: 'https://www.bechtel.com/assets/images/logos/c-logo.svg',
    },
    {
      name: 'Cintac',
      logo: 'https://www.cintac.cl/wp-content/themes/cintacnew/img/logo2.jpg',
    },
    {
      name: 'RL Arquitectura',
      logo: 'https://static.wixstatic.com/media/b9e2b1_95dca88868794bc89c740631233248de~mv2.jpg/v1/crop/x_38,y_13,w_896,h_934/fill/w_70,h_73,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled.jpg',
    },
  ]
  return (
    <div className='OurClients'>
      <section className='titleClients'>
        <h1>{title}</h1>
      </section>

      <section className='clientContainer'>

        <div>
          <figure>
            <img src={companies[0].logo} alt="" />
          </figure>

          <figure>
            <img src={companies[1].logo} alt="" />
          </figure>

          <figure>
            <img src={companies[2].logo} alt="" />
          </figure>
        </div>
        <div>
          <figure>
            <img src={companies[3].logo} alt="" />
          </figure>
          <figure>
            <img src={companies[4].logo} alt="" />
          </figure>
        </div>

      </section>
    </div>
  )
}

export { OurClientsLogos }