import React from 'react';
import MoveButton from './MoveButton';
import styles from './Hero.module.css'

const HeroControls = () => {
    return ( 
        <div className={styles.buttonContainer}>
            <div className={styles.row}>
                <MoveButton direction='UP'/>
            </div>
            <div className={styles.row}>
                <MoveButton direction='LEFT' />
                <MoveButton direction='RIGHT' />
            </div>
            <div className={styles.row}>
                <MoveButton direction='DOWN' />
            </div>
        </div>


     );
}
 
export default HeroControls;
