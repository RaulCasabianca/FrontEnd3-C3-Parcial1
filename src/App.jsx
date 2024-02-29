import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Elige un color</h1>
        <form>{/* aqui deberias escribir tu codigo */}</form>
      </div>
    </>
  )
}

export default App
