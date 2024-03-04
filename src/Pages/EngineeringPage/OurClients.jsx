import React from 'react'
import './OurClients.scss'

function OurClients() {
  const title = 'Empresas que han confiado en nosotros'

  const companies = [
    {
      name: 'Slack',
      logo: 'https://www.svgrepo.com/show/448248/slack.svg',
    },
    {
      name: 'Uber',
      logo: 'https://www.svgrepo.com/show/349541/uber.svg',
    },
    {
      name: 'Koenigsegg',
      logo: 'https://seeklogo.com/images/K/koenigsegg-logo-A17A281EA5-seeklogo.com.png',
    },
    {
      name: 'BMV',
      logo: 'https://www.svgrepo.com/show/303123/bmw-logo.svg',
    },
    {
      name: 'Lexcorp',
      logo: 'https://seeklogo.com/images/L/lexcorp-logo-4EBCDA550A-seeklogo.com.png',
    },
    {
      name: 'Apple',
      logo: 'https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png',
    },
    {
      name: 'SpaceX',
      logo: 'https://www.svgrepo.com/show/303337/spacex-logo.svg',
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
            <img src={companies[5].logo} alt="" />
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

export { OurClients }