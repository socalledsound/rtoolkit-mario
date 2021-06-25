import React from 'react';
import { useDispatch } from 'react-redux'
// import { store } from '../../app/store'
import { updateHero } from './heroSlice'
import styles from './Hero.module.css'

const moveValues = {
    'LEFT' : {x: -10, y: 0},
    'RIGHT' : {x: 10, y: 0},
    'UP' : {x: 0, y: -10},
    'DOWN' : {x: 0, y: 10},
}


const MoveButton = ({direction}) => {

    const dispatch = useDispatch()
    
    return ( 

        <div>
            <button 
                className={`${styles.moveButton} ${styles[direction]}`}
                // onClick={() => updateParentParent(moveValues[direction])}
                onClick={() => dispatch(updateHero(moveValues[direction]))}
            >
                {direction}
            </button>
        </div>

     );
}
 
export default MoveButton;