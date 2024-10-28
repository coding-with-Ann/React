import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//If we want to render any changes in the UI, those changes can't be directly propagated, we need to 
//use some kind of state management for that and in react we have a hook for that known as useState
function App() {
  const [color, setColor] = useState('olive')
  //olive is given as the default value
  // firstpart is a variable and second part is method used to change variable

  return (
  <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    {/* enclosed in double {{}} because it’s an object within JSX background-color:color is object */}
    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
    rounded-3xl">
      <button 
      onClick={()=>{setColor('lightblue')}}
      className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
      style={{backgroundColor:'lightblue'}}>Blue</button>
      {/* we can't pass parameteres to onClick directly, it expects callback fn */}
      <button
      onClick={()=>{setColor('lightpink')}} 
      className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
      style={{backgroundColor:'lightpink'}}>Pink</button>
    </div>
    </div>
  </div>
  )
}

export default App
