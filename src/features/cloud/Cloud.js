import React from 'react';
import { useSelector } from 'react-redux'
import { selectCloudPosition } from './cloudSlice'
import CloudImg from '../../assets/cloud.png'
import styles from './Cloud.module.css'

const Cloud = () => {

    const cloudPosition = useSelector(selectCloudPosition)

    return ( 
        <div className={styles.cloudContainer} style={{left: cloudPosition.x, top: cloudPosition.y}}> 
            <img src={CloudImg} alt="cloud" className={styles.cloudImage}/>
        </div>
     );
}
 
export default Cloud;