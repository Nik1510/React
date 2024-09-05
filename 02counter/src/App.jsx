import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  Q.) I have to set up counter which is cannot go less than 0 and greater than 20 

  let [counter,setCounter] = useState(0) // there is a variable called "counter" and 
  // there is setCounter  which is responsible for update "counter"


  // let counter = 5;
  

  const addValue =() =>{
    console.log("Clicked "+counter)
    if(counter<=20){
    // counter = counter+1; now we don't need to use this as we are using hooks such as useStates 
    counter = counter +1
    setCounter(counter)
    }else{
      console.log("Counter is greater than 20")
    }
  }
  
  const remValue = ()=>{
    if(counter>0){
    console.log("Clicked "+counter)
    // counter = counter-1;
    setCounter(counter-1)
    }else{
      console.log("Counter is less than 0")

    }
  }

  return (
    <>
     <h1> Chai aur React</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick ={addValue} >Add Value {counter}</button>

     <br />

     <button 
     onClick = {remValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
