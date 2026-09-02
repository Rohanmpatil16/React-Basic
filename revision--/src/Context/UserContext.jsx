import React from 'react'
import { createContext, useState } from 'react'    

export const UserContext= createContext();

const UserProvider=({children})=>{
    const [users,setUsers]=useState(["name"])

    return(
        <UserContext.Provider value={{users,setUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext