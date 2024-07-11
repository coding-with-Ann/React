import { useState } from 'react'  //imported useState from react
import './App.css'


function App() {
  //let counter = 15
  const [counter, setCounter] = useState(15)  
  //counter is variable, setCounter is method
  //15 is initial state, if we dont give any value we get NAN error

//The counter value returned from state is updated everywhere in UI, so this solves the ghost problem. 
  const addValue = ()=>{
    setCounter(counter+1)

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    //after this the counter value will still be 16 because react thinks that same method is being
    //called multiple times and does it only once
    //To overcome this we can use callback fns
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)

  }

  const removeValue = ()=>{

    setCounter(counter-1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add value</button>{' '} 
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
    
    //using {counter} is called variable injection 
    //injected count variable
  )
}

export default App
