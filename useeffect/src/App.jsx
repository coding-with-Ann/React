//some components needs to synchronize with external systems like establishing server connection or
//we might want to send some analytic logs when component appears on the screen
//or we want to control a non react component based on the state of react component, so effects enable 
//us to execute some code after rendering so that we can synchronize our system that is outside 
//of react and this can done in react using useeffect hook

//The main role of react component is to render UI and respond to certain events and to re-render the 
// UI whenever its needed.
//Event handlers maybe containg some side effects like http request, dom manipulation, browser storage.

// side effect is something that is happening in the application that is not related to UI rendering
//react assumes our components as pure which menas it should not contain any side effects.
//So we should try to create our componet as a pure component with out any side effects. 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  function getUsers(){
    //http call
    // some times we want to get data from server or do http request as soon as component renders on UI
    // or component mounted on dom so we cant use buttons for that, we need something that executes 
    // itself, in that case we can use useeffect hook
    //useeffect IS USED TO HANDLE SIDE-EFFECTS
  }

  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={()=>setCount(value=>count+1)}>+</button>
      <User counter={count}/>
      <Users/>
    </div>
  )
}

export default App


