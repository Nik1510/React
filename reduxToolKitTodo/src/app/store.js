import {configureStore} from '@reduxjs/toolkit'
// store need the knowlegde of the reducers and give the key value of the reducer
import todoreducer from '../features/todo/todoSlices'
export const store = configureStore({
    reducer: todoreducer
})

// why do we use redux 
// Redux solves the state transfer problem by storing all of the states
//  in a single place called a store. 
// So, managing and transferring states becomes easier as all the states are stored in the same convenient store.
//  Every component in the application can then directly access the required state from that store