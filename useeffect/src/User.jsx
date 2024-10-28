//[] -- mounting phase -- executes only once
//[state or prop] -- updating phase -- runs on first rendering and everytime state or prop change
// that you passed as dependency

import { useEffect } from "react"
const User = ({counter})=>{
    // console.log("out side ueseeffect")
    useEffect(()=>{
        console.log('rendering...', counter)
        //In useeffect we will write the logic which is a part of side effect
        //if we dont pass dependency side effect executes on every render(its like not using side effect)
        //if dependency array is empty useeffect will execute only once

        //using a function to unmount(like closing connection or cleanup)

        return ()=>{
            console.log('unmounting', counter)
        } //closing connection can be done in unmounting phase.

    }, [counter]) 
    // console.log('rendering...')
    //this cosole.log is also a part of side effect
    //whenever component renders this side effect also executes.
    //we want to control it, we dont want to execute on every state change.
    return(
        <h1>User component</h1>
    )
}

export default User



