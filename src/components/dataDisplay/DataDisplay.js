import React from 'react'
import { useSelector  } from 'react-redux'
import { selectHeroPosition, } from '../../features/hero/heroSlice'
import { selectCloudPosition } from '../../features/cloud/cloudSlice'
import { selectNumCoinsCollected } from '../../features/coins/coinsSlice'
import styles from './DataDisplay.module.css'

const DataDisplay = () => {

    const heroPosition = useSelector(selectHeroPosition)
   const cloudPosition = useSelector(selectCloudPosition)
   const numCoinsCollected = useSelector(selectNumCoinsCollected)
    // const xp = useSelector(selectXp)
    // const level = useSelector(getLevel)
    // const stats = useSelector(selectStats)
    // const inventory = useSelector(selectInventory)


    return ( 
        <div className={styles.dataWrapper}>
             <div className={styles.dataContainer}>
                {heroPosition &&
                <p className={styles.dataItem}>hero position: x: {heroPosition.x - window.innerWidth/2 + 20} y : {heroPosition.y}</p>
                }
               {cloudPosition &&
                <p className={styles.dataItem}>cloud position: x: {cloudPosition.x - window.innerWidth/2 + 20} y : {cloudPosition.y}</p>
                }
                <p className={styles.dataItem}>numCoinsCollected : {numCoinsCollected}</p>
             </div>
          {/* <p className="state-item">position: x: {position.x} y : {position.y}</p> */}
          {/* <p className="state-item">xp : {xp} </p>
          <p className="state-item">level: {level}</p>
          <p className="state-item">stats : health {stats.health}, maxHealth: {stats.maxHealth}</p>
          <p className="state-item">inventory : potions: {inventory.potions}</p> */}
        </div>

     );
}
 
export default DataDisplay;