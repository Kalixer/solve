import React from 'react';
import { aboutLang } from './AboutUsLang';
import { MyContext } from '../../hooks/MyContext';
import { wordBolden } from '../../utils/wordBolden'

import './AboutUs.scss';

function AboutUs() {
    const image = 'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // const image = 'https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    const { languageEs } = React.useContext(MyContext)


    

    const h3_intro = wordBolden(languageEs ? aboutLang.aboutH3_Es : aboutLang.aboutH3_En, 'solve')
    const h3_continue = wordBolden(aboutLang.continueAboutH3_Es, 'Ingeniería, Construcción e Industrial')
    const h3_continue_En = wordBolden(aboutLang.continueAboutH3_En, 'Engineering, Construction and Industrial')
    


    const about = (
        <>
            <h3>
                {h3_intro}
            </h3>
            <h3>
                {languageEs ? h3_continue : h3_continue_En}
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