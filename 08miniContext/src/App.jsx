import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>  
      <h1>React context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    // because of this tag all the components wraped inside it will be aware of provider
  )
}

export default App
