import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <header>
      <nav className="pa3 pa4-ns">
        <Link
          className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
          to="/"
        >
          Site Name
        </Link>
        <div className="tc pb3">
          <Link className="link dim gray f6 f5-ns dib mr3" to="/">
            Home
          </Link>
          <Link className="link dim gray f6 f5-ns dib mr3" to="/prueba">
            About
          </Link>
          <Link className="link dim gray f6 f5-ns dib mr3" to="#">
            Store
          </Link>
          <Link className="link dim gray f6 f5-ns dib" to="#">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
