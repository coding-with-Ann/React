import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  // if we see :userid from user route in main.jsx, : indicates userid is going to useParams hook
  //then it will be stored in const userid key
  return (
    <div className='bg-orange-400 text-black text-3xl text-center py-5'>User:{userid}</div>
  )
}

export default User