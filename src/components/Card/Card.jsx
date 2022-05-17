import './card.css'

export default function Card({ nombre, descripcion, imagenes, stars = 4.2 }) {
  console.log(descripcion)
  return (
    <div className="card">
      <div className="card-image">
        <picture>
          <img
            style={{ objectFit: 'cover', verticalAlign: 'bottom' }}
            src={imagenes[0]}
            alt="Card Image"
          />
        </picture>
      </div>
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">
            <span className="title-4">
              {nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </span>
            <span className="subtitle-4">¡Disponible!</span>
          </div>
          <div className="card-rating">
            <span className="rating">{stars}/5</span>
            <span className="star"></span>
          </div>
        </div>

        <div className="card-description">
          <span className="item">
            Vistas al mar:{' '}
            {descripcion.vistas_playa ? (
              <span className="check-green"></span>
            ) : (
              <span className="check-red">X</span>
            )}
          </span>
          <span className="item">
            Baño:{' '}
            {descripcion.baño ? (
              <span className="check-green"></span>
            ) : (
              <span className="check-red"></span>
            )}
          </span>
          <span className="item">
            Television:{' '}
            {descripcion.television ? (
              <span className="check-green"></span>
            ) : (
              <span className="check-red"></span>
            )}
          </span>
          <span className="item">
            Telefono:{' '}
            {descripcion.telefono ? (
              <span className="check-green"></span>
            ) : (
              <span className="check-red"></span>
            )}
          </span>
        </div>

        <div className="booking">
          <button>¡RESERVAR AHORA!</button>
        </div>
      </div>
    </div>
  )
}
