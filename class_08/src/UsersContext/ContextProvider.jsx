import React, { useState } from 'react'
import { UsersContext } from './context'

const ContextProvider = ({children}) => {

  const [users, setUsers] = useState([])

  const storeData = {
    users,
    updateUsers : (payload)=>{setUsers(payload)}
  }

  return (
    <UsersContext.Provider value={storeData}>
      {children}
    </UsersContext.Provider>
  )
}

export default ContextProvider