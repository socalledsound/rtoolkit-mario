import React from 'react';
import { useSelector } from 'react-redux'
import { selectCoinSize } from './coinsSlice'
import styles from './Coin.module.css'
import CoinImg from '../../assets/coin.png'

const Coin= ({position}) => {
    
    const size = useSelector(selectCoinSize)

    return ( 
        <React.Fragment>
            {
        position &&
        <div className={styles.coinContainer} style={{left: position.x, top: position.y, width: `${size}px`, height: `${size}px`}}>
            <img src={CoinImg} alt="coin"className={styles.coinImage} />
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
 
export default Coin;