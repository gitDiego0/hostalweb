export const getToday = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  dd < 10 ? `0${dd}` : dd
  mm < 10 ? `0${mm}` : mm
  return `${yyyy}-${mm}-${dd}`
}

export const addDaysToDate = (date, days) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)
  const dd = String(newDate.getDate()).padStart(2, '0')
  const mm = String(newDate.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = newDate.getFullYear()

  dd < 10 ? `0${dd}` : dd
  mm < 10 ? `0${mm}` : mm
  return `${yyyy}-${mm}-${dd}`
}
