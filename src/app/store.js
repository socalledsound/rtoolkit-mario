import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import audioMiddleware from './audioMiddleware/audio.middleware';
import  cloudReducer  from '../features/cloud/cloudSlice'
import  heroReducer  from '../features/hero/heroSlice'
import  coinsReducer  from '../features/coins/coinsSlice'
// import counterReducer from '../features/counter/counterSlice';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
   // sagaMiddleware: Makes redux-sagas work
   const middlewares = [sagaMiddleware, audioMiddleware];


export const store = configureStore({
  reducer: {
    hero: heroReducer,
    cloud: cloudReducer,
    coins: coinsReducer,
  },
  middleware: [...getDefaultMiddleware(), ...middlewares],
});
