// useref is used to store reference of a element(but not a value, for value we use usestate)
// useref returns an object and that object has a .current value we can access 
//unlinke usestate useref doesnt trigger a re-render of the component
//useref values are not used for rendering.
//the value inside useref can be accessed using .current

import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  const handleIncrement =()=>{
    setCount(()=>count+1)
    countRef.current++

    console.log('state ',count)
    console.log('ref ',countRef)
    //if we press button the counter value in return statement will update to to 1 but the state 
    //value in console will still remain as 0 because state update triggers on new render and the updated
    //value is accessible only after new render, in above code when react sees count+1 its gonna update 
    // the state of count to count+1 and then it continues to run the body of the fn after everything is 
    // done its gonna re-render the component and in that second we can access the new value of 
    //state on dom as 1 however, console.log(count) wont run in second render, its still running in that
    //initial render when we clicked the button, so even though we set count using setcount the value is 
    //accessible only in the next render so the console.lo(count) references the old value which is 0
    //if we press the increment button again then we will have the new value of previous render
    //which is 1
    //useRef allows us to make updates and read updated value instantly without waiting for a re-render
    //because useRef doesn't trigger a re-render.
    //If we need a new re-render we will use state
    //If we dont need a new re-render we will use useRef
    
  }

  return (
    <>
      <h1>count:{countRef.current}</h1> 
      {/* this wont increase the count on dom cos we will get updated value only on component re-render 
      but useref doesnt re-render the component but if we uncomment setCount it triggers the
      re-render by using useState then we can see updated value stored in useRef on dom.
      It means we can see updated values on re-render of component */}
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
