import { useState, createContext } from 'react'
import { addDaysToDate, getToday } from '../components/utils/getDate'

export const DateContext = createContext()

export const ContextWrapper = (props) => {
  const [dateIn, setDateIn] = useState(getToday())
  const [dateOut, setDateOut] = useState(addDaysToDate(new Date(dateIn), 1))

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
