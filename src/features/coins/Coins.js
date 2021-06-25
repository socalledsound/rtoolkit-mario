import React from 'react'
import { useSelector } from 'react-redux'
import { selectUncollectedCoinPositions, selectCollected } from './coinsSlice'
import Coin from './Coin'
const Coins = () => {

    const coinPositions = useSelector(selectUncollectedCoinPositions)
    const collected = useSelector(selectCollected)
    console.log(coinPositions, collected)

    return ( 
        <div>
            {
                coinPositions.map( (position, idx) => <Coin key={`coin${idx}`}position={position}/>)
            }
        </div>
     );
}
 
export default Coins;