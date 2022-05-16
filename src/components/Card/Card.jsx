import './card.css'

export default function Card({ title, description, image, stars }) {
  return (
    <div className="card">
      <div className="card-image">
        <picture>
          <img
            style={{ objectFit: 'cover', verticalAlign: 'bottom' }}
            src={image}
            alt="Card Image"
          />
        </picture>
      </div>
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">
            <span className="title-4">{title} </span>
            <span className="subtitle-4">¡Disponible!</span>
          </div>
          <div className="card-rating">
            <span>{stars}/5</span>
            <span className="star"></span>
          </div>
        </div>

        <span className="text">{description}</span>
      </div>
    </div>
  )
}
