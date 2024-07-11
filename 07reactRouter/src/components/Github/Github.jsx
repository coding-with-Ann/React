import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {

    const data = useLoaderData()  // this hook returns all the data stored in githubInfoLoader

    // const [data, setData] = useState([])       
    // useEffect(() => {
    //     fetch('https://api.github.com/users/remix-run')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} width={200} alt="" />

        </div>

    )
}

export default Github

export  const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/remix-run')
    return response.json()
}
// we want to load data as soon as we hover over github so when we click on we can see data quickly