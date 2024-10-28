import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <h1>Not logged in</h1>
  return (
    <div>
      <h1>Profile : {user.username}</h1>
    </div>
  )
}

export default Profile

// create context ---- creating context
// provide context ---- to make the companets aware of context 
// consume the context --- use the context anywhere in componets.

//context creation has two parts
//userContext