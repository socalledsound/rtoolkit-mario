import React from 'react'
import Cloud from './features/cloud/Cloud'
import Hero from './features/hero/Hero'
import Coins from './features/coins/Coins'
import DataDisplay from './components/dataDisplay/DataDisplay'
import HeroControls from './features/hero/HeroControls'
import styles from './App.module.css'
const App = () => {
  return ( 
    <div className={styles.mainWrapper}>
    <div className={styles.wrapperLeft}>
        <DataDisplay />
        <HeroControls />
    </div>
    <div className={styles.wrapperRight}>
        <Cloud />
        <Hero /> 
        <Coins />
    </div>
</div>
   );
}
 
export default App;