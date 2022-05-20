import { useContext, useEffect } from 'react'
import { DateContext } from '../../contexts/dateContext'
import { getToday, addDaysToDate } from '../utils/getDate'
import './datepicker.css'

export default function DatePicker() {
  const { dateIn, dateOut, actions } = useContext(DateContext)
  console.log(dateOut)

  const setDateIn = (e) => {
    console.log(e.target.value)
    actions.setDateIn(e.target.value)
  }

  const setDateOut = (e) => {
    console.log(e.target.value)
    actions.setDateOut(e.target.value)
    console.log('fechaEntrada: ' + dateIn)
  }

  const today = getToday()
  let minOutDate2

  const minOutDate = addDaysToDate(new Date(dateIn), 1)

  return (
    <div className="datesContainer">
      <div className="datepicker">
        <label>Check-in</label>
        <input
          name="fechaEntrada"
          min={today}
          max="2022-10-30"
          type="date"
          onChange={(e) => setDateIn(e)}
        />
      </div>
      <div className="datepicker">
        <label>Check-out</label>
        <input
          name="fechaSalida"
          min={minOutDate}
          max="2022-10-31"
          type="date"
          onChange={(e) => setDateOut(e)}
        />
      </div>
    </div>
  )
}
