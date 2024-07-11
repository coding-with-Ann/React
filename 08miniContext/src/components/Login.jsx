import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e)=>{
      e.preventDefault()
      setuser({username,userpassword})

    }
  return (
    <div>
        <h2>login</h2>
        <input
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
        />
        {" "}
        <input 
            type='password'
            value={userpassword}
            onChange={(e)=>setUserpassword(e.target.value)}
            placeholder='password'
        />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login