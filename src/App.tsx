import { useState } from 'react'
import PhotoBackground from './components/PhotoBackground'
import FloatingHearts from './components/FloatingHearts'
import Envelope from './components/Envelope'
import './App.css'

const App = () => {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <PhotoBackground revealed={revealed} />
      <FloatingHearts />
      <Envelope onYes={() => setRevealed(true)} />
    </>
  )
}

export default App
