import React from 'react'
import { useSelector  } from 'react-redux'
import { selectHeroPosition, } from '../../features/hero/heroSlice'
import styles from './DataDisplay.module.css'

const DataDisplay = () => {

    const position = useSelector(selectHeroPosition)
    // const xp = useSelector(selectXp)
    // const level = useSelector(getLevel)
    // const stats = useSelector(selectStats)
    // const inventory = useSelector(selectInventory)


    return ( 
        <div className={styles.dataWrapper}>
             <div className={styles.dataContainer}>
                {position &&
                <p className={styles.dataItem}>hero position: x: {position.x - window.innerWidth/2 + 20} y : {position.y}</p>
                }
               
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