import { useState, createContext } from 'react'

export const DateContext = createContext()

export const ContextWrapper = (props) => {
  const [dateIn, setDateIn] = useState(new Date())
  const [dateOut, setDateOut] = useState(new Date())
  // const [store, setStore] = useState({
  //   dateIn: new Date(),
  //   dateOut: new Date(),
  // })

  const [actions, setActions] = useState({
    setDateIn: (date) => {
      setDateIn(date)
    },
    setDateOut: (date) => {
      setDateOut(date)
    },
  })

  return (
    <DateContext.Provider value={{ dateIn, dateOut, actions }}>
      {props.children}
    </DateContext.Provider>
  )
}
