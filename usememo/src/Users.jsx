import { useState, useMemo } from 'react'
import UserCard
    from './UserCard'
const Users = () => {
    const usersList = [
        { id: 1, name: 'ben' },
        { id: 2, name: 'mark' },
        { id: 3, name: 'stark' },
        { id: 4, name: 'alan' }
    ]

    const [users, setusers] = useState(usersList)
    const [counter, setcounter] = useState(0)

    const displayList = useMemo(() =>
        users.map(user => {
            console.log('preparing card.....')
            return (
                <UserCard key={user.id} data={user} />
            )
        }), [users])


    // useMemo hook takes a fn and a dependency array as parameters 


    // useMemo returns a memoized value that is the result of running the function,
    // useCallback returns a memoized callback function that only changes if one of 
    //the dependencies has changed.

    return (
        <div>
            <h1>usememo hook</h1>
            <h3>{counter}</h3>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
            {/*if we increase the value counter increases but preparing card fn also gets 
            called 4 times, that means whenever any state in Users component is updating preparing
            card is getting called but counter has nothing to do with displayList(), if displaylist
            has 1000 users then fn gets called 1000 times this reduces the performance, this can
            be solved by wraping the fn in USEMEMO HOOK so that the ouput value can be cached ****
            so if same user is passed again then it will cache the result instead of executing that
            logic again, it will display the display list from cache*/}
            {displayList}
        </div>
    )
}

export default Users