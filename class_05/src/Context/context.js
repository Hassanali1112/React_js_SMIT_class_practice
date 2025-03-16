import { createContext, useState } from "react";


export const Context = createContext()

export default function MyContextProvider ({children}){

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Hassan Ali")

  const store ={
    count : count,
    updateCount : ()=>{
      setCount(count + 1)
    },
    name : name,
    updateName : ()=>{
      setName("Taimoor")
    }

  }
  return (
    <>
    <Context.Provider value={store}>
      { children }
    </Context.Provider>
    
    </>
  )
}