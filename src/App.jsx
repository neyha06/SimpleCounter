import { useState } from 'react'
import './App.css'

function App() {
  useState()
 // let counter =15
 let [counter,setCounter]= useState(0)
 let [msg,setMsg]= useState("Null");
  const addValue= ()=>{
    if(counter<20){
      setCounter(counter+1)
    }
    else{
      setMsg(<p>Value cannot exceed 20</p>)
      
    }
    //console.log(counter)
  }
  const decreaseCounter=()=>{
      if(counter>0){
        setCounter(counter-1)
      }
      else{
        msg=<p>Value cannot be decreased than this</p>
        setMsg(msg)
        
      }
  }

  return (
  <>
    <h1>Chai And React!</h1>
    <h2>Counter Value: {counter}</h2>
    <h2>Message: {msg}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={decreaseCounter}>Decrease Value</button>
  </>
  )
}

export default App
