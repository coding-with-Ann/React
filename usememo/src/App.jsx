import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users.jsx'

function App() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <Users/>
    </div>
  );
}

export default App;



//while working with states or props, sometimes component gets updated unwantedly 
//If its a huge function then we will performance issues, usememo reduces that issue