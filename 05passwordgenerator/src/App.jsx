//useCallback --- used to cache a fn definiton
//useMemo    --- returns a memoized value that is the result of running the function
//useEffect --- used to re-render the component if there is any change in state or prop in dep[]
//useState --- triggers component re-render on state change

//useCallback returns a memoized callback function that only
//changes if one of the dependencies has changed.

import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+'

    for(let i=1; i<=length; i++){
     const char = Math.floor(Math.random() * str.length +1)
     //(Math.random() * str.length+1) gives all the values betwn 0 and length of str
        //to make the number greater than 0 +1 is used
     pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])  //    This is the dependency array

  //To improve performane we have to restrict re-renders to only components that need to re-render.
  // useCallback is a react hook that lets you cache a fn definition between re-renders
  //It uses a concept called memoization ******
  //syntax:  useCallback(()=>{})
  
  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, charAllowed])

  //If length or numberAllowed or charAllowed changes then the code will re-run
  // if we want to run a piece of code when a component is loading or mounting and other scenarios.
  // then we can use useEffect() hook   ****
  //here we will increase length of password, allow numbers and characters using useEffect()

  // To copy code to clipboard
  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)   
    passwordRef.current?.select()
  }   
  // useref returns an object and that object has a .current value we can access 

  //To highlight the copied password as feedback to user
  const passwordRef = useRef()

  //useRef is used to grab anything from window and many other things


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-grey-800
    text-orange-500">
      <h1 className="text-white text-center my-3">password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} placeholder='password' readOnly
          className='outline-none w-full py-1 px-3'
          ref = {passwordRef} />
          {/* with this ref we now have the reference of this input field  */}

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>

      <div className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1">

          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          {/* range is used to provide length of characters */}

          <label htmlFor="length">length:{length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />

          <label htmlFor="number">Numbers</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />

          <label htmlFor="charInput">Character</label>

        </div>
      </div>
      

    </div>
  )
}

export default App
