import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ContextWrapper } from './contexts/dateContext'
import App from './pages/App'
import Prueba from './pages/Prueba'
import BookingRoom from './pages/booking/room'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/booking/:id" element={<BookingRoom />} />
      </Routes>
    </ContextWrapper>
  </Router>
)
