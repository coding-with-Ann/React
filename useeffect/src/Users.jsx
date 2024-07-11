import {useState, useEffect} from 'react'

const Users = ()=>{
    const [user, setuser] = useState([])
    const [refresh, setrefresh] = useState(false)

    const getUser = ()=>{
        const url = 'https://jsonplaceholder.typicode.com/users'
        
        return fetch(url)
        .then(data=>data.json())
    }
    useEffect(()=>{
        getUser()
        .then(result=>setuser(result))
    },[refresh])
    // so now if we dont pass any dependency array fetch gets executed every time the  
    // state of counter changes and re-renders UI
    //If we provide empty dep[] code inside useeffect gets executed only once(on mounting phase).
    //If we provide state or props in dep array useeffect will get executed everytime
    //state or prop changes.

    return(
       <div>
        <button onClick={()=>setrefresh(refresh=>!refresh)}>refresh</button>
        {user.map(item=><li key={item.id}>{item.key}{item.name}</li>)}   
       </div>
    )                           //item.id  ****
    
}

export default Users