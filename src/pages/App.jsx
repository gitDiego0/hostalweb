import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import logo from '../public/icons/logo.svg'
import '../App.css'
import Layout from '../components/layout'
import Card from '../components/Card/Card'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Card 1',
      description: 'hola',
      image: 'https://picsum.photos/200/300',
      stars: 3.1,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'hola',
      image: 'https://picsum.photos/200/300',
      stars: 2,
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'hola',
      image: 'https://picsum.photos/200/300',
      stars: 4,
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'hola',
      image: 'https://picsum.photos/200/300',
      stars: 4.5,
    },
  ])

  return (
    <div className="App">
      <Layout>
        <>
          {cards.map((card) => {
            return <Card key={card.id} {...card} />
          })}
        </>
      </Layout>
    </div>
  )
}

export default App
