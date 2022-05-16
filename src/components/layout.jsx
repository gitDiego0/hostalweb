import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}
