import React from 'react';
import { useSelector } from 'react-redux'
import { selectHeroPosition } from './heroSlice'
import styles from './Hero.module.css'
import MarioImg from '../../assets/mario.png'

const Hero = () => {
    
    const position = useSelector(selectHeroPosition)
  
    return ( 
        <React.Fragment>
            {
        position &&
        <div className={styles.heroContainer} style={{left: position.x, top: position.y}}>
            <img src={MarioImg} alt="mario"className={styles.heroImage} />
            {/* {
                achievedGoal ? 
                    <img src={RainbowLeprechaunImg} alt="leprechaun" className={styles.heroImage}/>
                    :
                    <img src={UnicornImg} alt="unicorn" className={styles.heroImage}/>
            } */}
            
        </div>
            }

        </React.Fragment>
     );
}
 
export default Hero;