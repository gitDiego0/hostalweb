import { useEffect, useState } from 'react'

import '../App.css'
import Layout from '../components/layout'
import Card from '../components/Card/Card'
import { getRooms } from '../firebase/client'
import DatePicker from '../components/DatePicker/DatePicker'
import { ContextWrapper } from '../contexts/dateContext'

function App() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const Spinner = () => {
    return <div className="spinner"></div>
  }

  useEffect(() => {
    getRooms().then((rooms) => {
      setRooms(rooms)
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <DatePicker />
            {rooms.map((room, id) => {
              return <Card key={room.id} {...room} />
            })}
          </>
        )}
      </Layout>
    </div>
  )
}

export default App
