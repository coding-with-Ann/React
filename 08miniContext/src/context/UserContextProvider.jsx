// This usercontextprovider works as a central men which allows
// the context to access data and feed the data.

import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setuser] = useState(null)  //this data accessible to all children and thats our goal

    return(
        <UserContext.Provider value = {{user, setuser}}>
            {children}
        </UserContext.Provider>
        // P is capital
        // UserContext gives the access to provider
    )
}

export default UserContextProvider
