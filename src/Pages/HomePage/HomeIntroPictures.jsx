import { useContext } from 'react';
import { Link } from 'react-router-dom'
// import calcImage from '../../assets/calculus2Vertical.jpg'
import houseImage from '../../assets/houseImageVertical.jpg'

import { scrollToTop } from '../../utils/scrollToTop';
import { MyContext } from '../../hooks/MyContext';
import { componentLang } from './HomeIntroPicturesLang';

import './HomeIntroPictures.scss'

function HomeIntroPictures() {

    const { languageEs } = useContext(MyContext)

    const calcSrc = 'https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg?auto=compress&cs=tinysrgb&w=1920&h=2880&dpr=1' 

    const ingDesc_Es = componentLang.ingDesc_Es
    const ingDess_En = componentLang.ingDesc_En
    const constDesc_Es = componentLang.constDesc_Es
    const constDesc_En = componentLang.constDesc_En
    
    return (
    <>
        <div className='HomeIntroPictures'>

            <div className='pictureBox'>
                <figure>
                    <img src={calcSrc} alt="" />
                </figure>
                <div className='texto'>
                    <h1>{languageEs ? componentLang.solveEngineering_Es : componentLang.solveEngineering_En}</h1>
                    <p>{languageEs ? ingDesc_Es : ingDess_En}</p>
                    <Link className='b_link' to='/engineering' onClick={scrollToTop}>
                        <button>{languageEs ? componentLang.contact_Es : componentLang.contact_En}</button>
                    </Link>
                </div>
            </div>

            <div className='pictureBox'>
                <figure>
                    <img src={houseImage} alt="" />
                </figure>
                <div className='texto'>
                    <h1>{languageEs ? componentLang.solveConstruction_Es : componentLang.solveConstruction_En}</h1>
                    <p>{languageEs ? constDesc_Es : constDesc_En}</p>
                    <Link to='/construction' onClick={scrollToTop} className='b_link'>
                        <button>{languageEs ? componentLang.contact_Es : componentLang.contact_En}</button>
                    </Link>
                </div>
            </div>
            
        </div>
    </>
  )
}

export { HomeIntroPictures }